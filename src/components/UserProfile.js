const UserProfile = (function() {
    var full_name = "";
    var session = false;
  
    var getName = function() {
      return full_name;    // Or pull this from cookie/localStorage
    };

    var getSession = function(){
        return session;
    }
  
    var setName = function(name,bol) {
      full_name = name;     
      session = bol;
      // Also set this in cookie/localStorage
    };
  
    return {
      getName: getName,
      setName: setName,
      getSession: getSession
    }
  
  })();
  
  export default UserProfile;