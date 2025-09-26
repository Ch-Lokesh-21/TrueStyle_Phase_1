(function (global) {
  const K = {
    loggedIn: 'ts_is_logged_in',
    userId:   'ts_user_id',
    role:     'ts_role'
  };

  function setSession(id, role){
    localStorage.setItem(K.loggedIn, '1');
    localStorage.setItem(K.userId, String(id));
    localStorage.setItem(K.role, role);
  }
  function clearSession(){
    localStorage.removeItem(K.loggedIn);
    localStorage.removeItem(K.userId);
    localStorage.removeItem(K.role);
  }
  function isLoggedIn(){ return localStorage.getItem(K.loggedIn) === '1'; }
  function role(){ return localStorage.getItem(K.role) || null; }
  function user(){
    if (!isLoggedIn()) return null;
    const id = Number(localStorage.getItem(K.userId) || 0);
    const r  = role();
    if (r === 'admin') return AppDB.get('Admin', id);
    if (r === 'user')  return AppDB.get('User', id);
    return null;
  }

  const TSAuth = {
    setSession, clearSession, isLoggedIn, role, user,

    login(email, password){
      const adm = AppDB.findAdminByEmail(email);
      if (adm && adm.password === password) { setSession(adm.id, 'admin'); return { ...adm, role:'admin' }; }
      const usr = AppDB.findUserByEmail(email);
      if (usr && usr.password === password) { setSession(usr.id, 'user');  return { ...usr, role:'user'  }; }
      return null; // invalid creds
    },

    register({ firstName, lastName, email, password }){
      // Register ONLY as user (per your instruction)
      if (AppDB.findUserByEmail(email) || AppDB.findAdminByEmail(email)) {
        throw new Error('Account already exists for this email.');
      }
      const row = AppDB.insert('User', {
        id: undefined, First_Name:firstName||'',
        Last_Name:lastName||'',
        Creation_Date:null, Modified_Date:null,
        email: (email||'').toLowerCase(),
        password
      });
      setSession(row.id, 'user');
      return { ...row, role:'user' };
    },

    requireAdmin(){
      if (!isLoggedIn() || role()!=='admin') {
        location.replace('/src/Features/Auth/login/login.html');
      }
    },
    requireUser(){
      if (!isLoggedIn() || role()!=='user') {
        location.replace('/src/Features/Auth/login/login.html');
      }
    },
    logout(){
      clearSession();
    }
  };

  global.TSAuth = TSAuth;
})(window);
