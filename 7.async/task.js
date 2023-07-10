class AlarmClock {
  constructor (){
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback){
    if (!time || !callback){
      throw new Error('Отсутствуют обязательные аргументы')
    } else if (this.alarmCollection.find(set => set.time === time)){
        console.warn('Уже присутствует звонок на это же время');
    }
    this.alarmCollection.push({callback,time, canCall : true});
  }

  removeClock(time){
    this.alarmCollection = this.alarmCollection.filter(set => set.time !== time) 
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString().slice(0, -3);
  }

  start() {
    if (this.intervalId) {
      return
    }
    this.intervalId = setInterval( () => {
      this.alarmCollection.forEach( set => {
        if (set.time === this.getCurrentFormattedTime() && set.canCall) {
          set.canCall = false;
          set.callback();          
        }
      })
    }, 1000);
  }

  stop(){
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls(){
    this.alarmCollection.forEach( set => set.canCall = true);
  }

  clearAlarms(){
    this.stop();
    this.alarmCollection = [];
  }
}