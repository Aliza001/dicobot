
export interface BotConfig {
    auto?: {
        deafen?: boolean,
        pause?: boolean,
        play?: boolean,
        reconnect?: boolean
    };
    command?: {
        symbol: string;
    },
    discord: {
        token: string;
        log?: boolean;
    },
    queue?: {
        announce?: boolean;
        repeat?: boolean;
    },
    stream?: {
        seek?: number;
        passes?: number;
        volume?: number;
        bitrate?: number | 'auto';
    }
}

export const DefaultBotConfig: BotConfig = {
    auto: {
        deafen: false,
        pause: false,
        play: false,
        reconnect: true
    },
    discord: {
        token: 'NjI0NjA3OTMxOTgzNDYyNDAw.XYjeKw.lh8uKJIMSksvPFX2TmFjr7mh950 ',
        log: true
    },
    command: {
        symbol: '!'
    },
    queue: {
        announce: true,
        repeat: false
    },
    stream: {
        seek: 0,
        passes: 3, 
        volume: 1,
        bitrate: 'auto'
    }
};
