var map = new GMaps({
    div: '#map',
    scrollwheel: false,
    lat: -31.218326,
    lng: -64.300173
});
map.addMarker({
    lat: -31.218326,
    lng: -64.300173,
    title: 'Salon',
    infoWindow: {
        content: '<p>Salon de eventos lalala</p>'
    }
});
document.getElementById("letsPlay").addEventListener("click", function() {
    document.getElementsByTagName('body')[0].className = 'games';
});
document.getElementById("toTheDarkSide").addEventListener("click", function() {
    document.getElementsByTagName('body')[0].className = 'developers';
});
var terminal = new Terminal('terminal', {'welcome':'use ? to list the commands'}, {
    execute: function(cmd, args) {
        switch (cmd) {
            case 'clear':
                terminal.clear();
                return '';

            case '?':
                return 'Commands: clear, ?, place, when, confirm [your name], quit, ver or version';

            case 'ver':
            case 'version':
                return '1.0.0';

            case 'place':
                return '-31.218326 -64.300173';
                
            case 'when':
                return '1428145200000'
                
            case 'quit':
                document.getElementsByTagName('body')[0].className = 'normal';
                return ''
                
            case 'confirm':
                var names = args.join(' ').replace("'", '').replace('"', '');
                return "wait, I'm a web app;<br />run this command on your machine: <br />mail -s 'Confirmar "+names+"' naticardetti@gmail.com";

            default:
                // Unknown command.
                return false;
        };
    }
});
var nes;
$(function() {
    nes = new JSNES({
        'swfPath': 'swf/',
        'ui': $('#nes').JSNESUI({
            "Working": [
                ['Bubble Bobble', 'roms/bobble.nes'],
                ['Pac-Man', 'roms/pac.nes'],
                ['Super Mario Bros.', 'roms/mario.nes'],
            ]
        })
    });

    document.getElementById("nes-close").addEventListener("click", function() {
        self.nes.reloadRom();
        self.nes.start();
        document.getElementsByTagName('body')[0].className = 'normal';
    });
});
