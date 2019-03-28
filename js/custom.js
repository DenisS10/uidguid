$( "#Myconvert" ).click(function() {
  let uid2guid = function(uid) {
    if (!uid) {
      return;
    }
   
    let steamId = bigInt(uid);
   
    let parts = [0x42,0x45,0,0,0,0,0,0,0,0];
   
    for (let i = 2; i < 10; i++) {
      let res = steamId.divmod(256);
      steamId = res.quotient; 
      parts[i] = res.remainder.toJSNumber();
    }
   
    let wordArray = CryptoJS.lib.WordArray.create(new Uint8Array(parts));
    let hash = CryptoJS.MD5(wordArray);
    return hash.toString();
   };
   
   
   
});






  