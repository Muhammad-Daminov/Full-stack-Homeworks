class YouTubeChannel {
    static totalChannels = 0;
    #subscribers = 0;

    constructor(channelName) {
        this.channelName = channelName;
        YouTubeChannel.totalChannels++;
    }

    subscribe() {
        this.#subscribers ++;
        console.log(`Subscribed`);
    }

    unsubscribe() {
    
        if (this.#subscribers < 0){
             this.#subscribers --;
            console.log(`Unsubscribed`);
        }
    }
    getInfo(){
        console.log(`channel name: ${this.channelName}, subscribers: ${this.#subscribers}`)
    }
    
  }

const mychannel = new YouTubeChannel("Saud Cyber")
mychannel.subscribe()
mychannel.getInfo()