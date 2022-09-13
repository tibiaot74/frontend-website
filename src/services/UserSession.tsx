var UserSession = (function () {
  var getUsername = function (): string | null {
    return localStorage.getItem("name");
  };

  var getToken = function (): string | null {
    return localStorage.getItem("token");
  };

  var setUsername = function (name: number) {
    localStorage.setItem("name", `${name}`);
  };

  var setToken = function (token: string) {
    localStorage.setItem("token", token);
  };

  var isLogged = function (): boolean {
    return Boolean(localStorage.getItem("token"));
  };

  return {
    getUsername: getUsername,
    setUsername: setUsername,
    getToken: getToken,
    setToken: setToken,
    isLogged: isLogged,
  };
})();

export default UserSession;
