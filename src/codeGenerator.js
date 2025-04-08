const code = (size) => {
    let results = []
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    const codeNo = 8;
    for (let i = 0; i < size; i++) {
      let result = ""
      for (let i = 0; i < codeNo; i++) {
        const randomCode = Math.floor(Math.random() * char.length);
        result += char[randomCode];
      }
      results.push(result)
    }
    
    return results;
  };
  
  console.log(code(100000));