function getNumber (value) {
  return parseFloat(value.toFixed(2));
}

function getMajorVersion (version) {
  var major = version.split('.');
  var clean = false;
  for (var i = 0; i < major.length; i++) {
    if (clean) {
      major[i] = 0;
    } else if (major[i] !== '0') {
      clean = true;
    }
  }
  return major.join('.');
}

function equal (var1, var2) {
  var keys1;
  var keys2;
  var type1 = typeof var1;
  var type2 = typeof var2;
  if (type1 !== type2) { return false; }
  if (type1 !== 'object') { return var1 === var2; }
  keys1 = Object.keys(var1);
  keys2 = Object.keys(var2);
  if (keys1.length !== keys2.length) { return false; }
  for (var i = 0; i < keys1.length; i++) {
    if (!equal(var1[keys1[i]], var2[keys2[i]])) { return false; }
  }
  return true;
}

function getOS () {
  var userAgent = window.navigator.userAgent;
  var platform = window.navigator.platform;
  var macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  var windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  var iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  var os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'macos';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'ios';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'windows';
  } else if (/Android/.test(userAgent)) {
    os = 'android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'linux';
  }

  return os;
}
module.exports = {
  equal: equal,
  getNumber: getNumber,
  getMajorVersion: getMajorVersion,
  getOS: getOS,
  os: getOS()
};
