function isAnagram(str1, str2) {
   const cleanStr1 = str1.toLowerCase().replace(/[^a-z]/g, '');
  const cleanStr2 = str2.toLowerCase().replace(/[^a-z]/g, '');
        return cleanStr1.toLowerCase().split('').sort().join() === cleanStr2.toLowerCase().split('').sort().join() 
      
    
}

isAnagram("listen", "silent");

// result: true