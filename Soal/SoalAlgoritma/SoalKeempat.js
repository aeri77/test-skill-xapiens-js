
let count = 0

const guessNumber = async (num) => {
    try{
        const mulai = await mbahMulai(num)
    }catch(error) {

    }
}

const mbahMulai = (num) => {
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
      const random = Math.floor(Math.random() * 100)
      console.log(`Mbah sedang baca mantra .... nomernya adalah ${random}`)
      count++
      
      //error hanler
      if(count > 100 ){
        throw new Error('Mbah gagal, Mbah tidak cukup kuat')
    }
     num === random ? resolve(console.log(`Mbah berhasil nebak nomornya = ${random}.. mbah menebak ${count}X`)) : mbahMulai(num)
    }, 1000)
  }).then((resolve, reject) => {
      
  })
  .catch(error => {
      console.log(error.message)
  })
}


//masukan nomer untuk ditebak
guessNumber(67)