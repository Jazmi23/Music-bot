module.exports = {
    app: {
        px: '&',
        token: 'OTQ5Nzg0MDQ0MTQ3NzEyMDEx.YiPZUg.OcagYetZsG4TMhvCpnDjZBnJDwo',
        playing: 'by BG MUSIC'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
