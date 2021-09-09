function timer() {
    this.habis = 'Waktu habis';
    this.berhenti = 'Waktu dihentikan';
    this.count = 10;

    const context = this; 
    this.interval = setInterval(function () {
        context.count--;
        console.log(context.count);
        if (context.count <= 1) {
            setTimeout( () => console.log(context.habis),1500);
            clearInterval(context.interval);
        }
    }, 1000);
    
   
}
timer();



