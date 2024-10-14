const API = {};
window.API = API;

API.creatures = [
    {
        name: 'poliwag',
        icon: {
            iconPath: 'poliwag.png',
            iconSize: [64, 64],
            iconArchor: [32, 64],
        },
        positions: [
            [
                { lat: 50.27224724060449, lng: 18.978688716888428 },
                { lat: 50.27181523297787, lng: 18.981328010559086 },
                { lat: 50.27216495373971, lng: 18.982701301574707 },
                { lat: 50.27351581177453, lng: 18.978635072708133 },
            ],
            [
                { lat: 50.2863333412752, lng: 18.981376290321354 },
                { lat: 50.28766665977402, lng: 18.981027603149418 },
                { lat: 50.28907877128089, lng: 18.98009419441223 },
            ]
        ]
    },
    {
        name: 'snail',
        icon: {
            iconPath: 'snail.png',
            iconSize: [64, 64],
            iconArchor: [32, 64],
        },
        positions: [
            [
                { lat: 50.277365889737794, lng: 18.986311554908756 },
                { lat: 50.27775328016404, lng: 18.986826539039615 },
                { lat: 50.278665177926655, lng: 18.988339304924015 },
                { lat: 50.2789977077268, lng: 18.988838195800785 },
            ],
            [
                { lat: 50.292389528618706, lng: 18.980893492698673 },
                { lat: 50.2925368965198, lng: 18.98121535778046 },
                { lat: 50.29286932941124, lng: 18.980968594551086 },
                { lat: 50.29303040430679, lng: 18.981274366378788 },
            ]
        ]
    },
    {
        name: 'squirrata',
        icon: {
            iconPath: 'squirrata.png',
            iconSize: [64, 64],
            iconArchor: [32, 64],
        },
        positions: [
            { lat: 50.28028323922947, lng: 18.982658386230472 },
            { lat: 50.280708314008606, lng: 18.982872962951664 },
            { lat: 50.28062604176695, lng: 18.982368707656864 },
            { lat: 50.28098255378713, lng: 18.98221850395203 },
        ]
    },
    {
        name: 'bulbfrog',
        icon: {
            iconPath: 'bulbfrog.png',
            iconSize: [64, 64],
            iconArchor: [32, 64],
        },
        positions: [
            { lat: 50.28053005730531, lng: 18.98850023746491 },
            { lat: 50.28107510935574, lng: 18.987872600555423 },
            { lat: 50.279978142894805, lng: 18.988097906112674 },
            { lat: 50.281431618012526, lng: 18.986767530441288 },
        ]
    },
    {
        name: 'hedgehog',
        icon: {
            iconPath: 'hedgehog.png',
            iconSize: [64, 64],
            iconArchor: [32, 64],
        },
        positions: [
            { lat: 50.28469149159859, lng: 18.975282311439518 },
            { lat: 50.28459551533497, lng: 18.97589921951294 },
            { lat: 50.2845098220789, lng: 18.97511601448059 },
        ]
    },
    {
        name: 'ent',
        icon: {
            iconPath: 'ent.png',
            iconSize: [64, 64],
            iconArchor: [32, 64],
        },
        positions: [
            { lat: 50.27820580304164, lng: 18.986880183219913 },
            { lat: 50.27837378392417, lng: 18.98716986179352 },
            { lat: 50.279107407769864, lng: 18.98819446563721 },
            { lat: 50.27879887575439, lng: 18.98772776126862 },
        ]
    }
];

API.areas = [];

API.areas[0] = [
    { lat: 50.27302210160673, lng: 18.976650238037113 },
    { lat: 50.273529525872775, lng: 18.97743344306946 },
    { lat: 50.27344724122403, lng: 18.97845268249512 },
    { lat: 50.273323813984256, lng: 18.978570699691776 },
    { lat: 50.27339238471252, lng: 18.978892564773563 },
    { lat: 50.273289528583106, lng: 18.98045897483826 },
    { lat: 50.27236381341952, lng: 18.982315063476566 },
    { lat: 50.272062094958756, lng: 18.982368707656864 },
    { lat: 50.272103238497806, lng: 18.98318409919739 },
    { lat: 50.2717055161311, lng: 18.98423552513123 },
    { lat: 50.27141065085274, lng: 18.982443809509277 },
    { lat: 50.27112949853789, lng: 18.98197174072266 },
    { lat: 50.27252838631956, lng: 18.97896766662598 },
    { lat: 50.27294667321363, lng: 18.977047204971317 },
];

API.areas[1] = [
    { lat: 50.27365980960912, lng: 18.98142457008362 },
    { lat: 50.2732346718899, lng: 18.98624181747437 },
    { lat: 50.272336384547536, lng: 18.985372781753544 },
    { lat: 50.272747815968096, lng: 18.982572555541996 },
]

API.routes = [];

API.routes[0] = [
    { lat: 50.280564337492414, lng: 18.971060514450077 },
    { lat: 50.27978959923844, lng: 18.970556259155277 },
    { lat: 50.2797416061885, lng: 18.970384597778324 },
    { lat: 50.278836585330204, lng: 18.970094919204715 },
    { lat: 50.27844577554949, lng: 18.970073461532596 },
    { lat: 50.278589758473565, lng: 18.969161510467533 },
    { lat: 50.27624483950495, lng: 18.96723031997681 },
    { lat: 50.275867721872096, lng: 18.967530727386475 },
    { lat: 50.27557288236935, lng: 18.968904018402103 },
    { lat: 50.27557288236935, lng: 18.969397544860843 },
    { lat: 50.27477749227825, lng: 18.971983194351196 },
    { lat: 50.274516930565795, lng: 18.973163366317753 },
    { lat: 50.27380380700822, lng: 18.974847793579105 },
    { lat: 50.27333067106153, lng: 18.97523403167725 },
    { lat: 50.27297410173404, lng: 18.976156711578373 },
    { lat: 50.27268610148167, lng: 18.9764678478241 },
    { lat: 50.272062094958756, lng: 18.97861361503601 },
    { lat: 50.271177500270134, lng: 18.981059789657596 },
    { lat: 50.27069062331364, lng: 18.982540369033817 },
    { lat: 50.27097520692794, lng: 18.982889056205753 },
    { lat: 50.27211695300293, lng: 18.985029458999637 },
    { lat: 50.27226438368344, lng: 18.985807299613956 },
    { lat: 50.27263124409322, lng: 18.986349105834964 },
    { lat: 50.2732826714999, lng: 18.98662805557251 },
    { lat: 50.2737660934458, lng: 18.98649394512177 },
    { lat: 50.274146656205616, lng: 18.986155986785892 },
    { lat: 50.27479806287902, lng: 18.985512256622318 },
    { lat: 50.275298611425185, lng: 18.9849328994751 },
    { lat: 50.27562430799548, lng: 18.98449301719666 },
    { lat: 50.2760528527197, lng: 18.985072374343876 },
    { lat: 50.276453967086475, lng: 18.985646367073063 },
    { lat: 50.276738516254845, lng: 18.985941410064697 },
    { lat: 50.27697506788331, lng: 18.985936045646667 },
    { lat: 50.277122483521076, lng: 18.98570537567139 },
    { lat: 50.27787669592091, lng: 18.986810445785522 },
    { lat: 50.278672034234646, lng: 18.988108634948734 },
    { lat: 50.27963190760692, lng: 18.989567756652836 },
    { lat: 50.28007070041646, lng: 18.990147113800052 },
    { lat: 50.28151046091259, lng: 18.987936973571777 },
    { lat: 50.28238115208097, lng: 18.9864993095398 },
    { lat: 50.281873822155525, lng: 18.985641002655033 },
    { lat: 50.281822403280216, lng: 18.985345959663395 },
    { lat: 50.28200408305776, lng: 18.985034823417667 },
    { lat: 50.28217890633994, lng: 18.984793424606327 },
    { lat: 50.28203836218329, lng: 18.984552025794986 },
    { lat: 50.28208978082533, lng: 18.98422479629517 },
    { lat: 50.28206921337519, lng: 18.984047770500187 },
    { lat: 50.28212405988916, lng: 18.983854651451114 },
    { lat: 50.2821034924538, lng: 18.983570337295536 },
    { lat: 50.28213434360348, lng: 18.983151912689213 },
    { lat: 50.28171270949387, lng: 18.9823579788208 },
    { lat: 50.281541312446635, lng: 18.981285095214847 },
    { lat: 50.281541312446635, lng: 18.98049652576447 },
    { lat: 50.28177784021001, lng: 18.979568481445312 },
    { lat: 50.282079497101364, lng: 18.979042768478394 },
    { lat: 50.28171613742853, lng: 18.977792859077457 },
    { lat: 50.28176755641864, lng: 18.977626562118534 },
    { lat: 50.28153788449941, lng: 18.97724032402039 },
    { lat: 50.28091399399061, lng: 18.976317644119266 },
    { lat: 50.280218106468276, lng: 18.975352048873905 },
    { lat: 50.279943862285556, lng: 18.97446691989899 },
    { lat: 50.28010498093434, lng: 18.973549604415894 },
    { lat: 50.280053560148254, lng: 18.973388671875004 },
    { lat: 50.28017354189609, lng: 18.973023891448975 },
    { lat: 50.280200966253126, lng: 18.97241771221161 },
    { lat: 50.28038950828013, lng: 18.97173643112183 },
    { lat: 50.28056090947481, lng: 18.971387743949894 },
    { lat: 50.280722026035036, lng: 18.971081972122196 },
    { lat: 50.280564337492414, lng: 18.971060514450077 },
];

API.routes[1] = [
    { lat: 50.2873856034548, lng: 18.96827101707459 },
    { lat: 50.28763238470201, lng: 18.969054222106937 },
    { lat: 50.2873444731225, lng: 18.970395326614383 },
    { lat: 50.28672065872469, lng: 18.971178531646732 },
    { lat: 50.28632991367307, lng: 18.972101211547855 },
    { lat: 50.28605570470364, lng: 18.9734423160553 },
    { lat: 50.286309348055184, lng: 18.974815607070926 },
    { lat: 50.28599400746781, lng: 18.97737979888916 },
    { lat: 50.28569923068142, lng: 18.980051279067997 },
    { lat: 50.285411307406534, lng: 18.98048043251038 },
    { lat: 50.284472116997364, lng: 18.982014656066895 },
    { lat: 50.283505485617084, lng: 18.9805018901825 },
    { lat: 50.28345749631363, lng: 18.98019075393677 },
    { lat: 50.28190124553298, lng: 18.977884054183964 },
    { lat: 50.28098940976134, lng: 18.97642493247986 },
    { lat: 50.28021467842573, lng: 18.975330591201786 },
    { lat: 50.279974714834985, lng: 18.97451519966126 },
    { lat: 50.28007070041646, lng: 18.973603248596195 },
    { lat: 50.28021467842573, lng: 18.97244453430176 },
    { lat: 50.280735738057565, lng: 18.971060514450077 },
    { lat: 50.281270503854095, lng: 18.970534801483158 },
    { lat: 50.28204521800544, lng: 18.969601392745975 },
    { lat: 50.282771929553, lng: 18.968410491943363 },
    { lat: 50.28307358014426, lng: 18.96802425384522 },
    { lat: 50.28428701889108, lng: 18.96771311759949 },
    { lat: 50.28519879149108, lng: 18.967541456222538 },
    { lat: 50.28600086272018, lng: 18.96735906600952 },
    { lat: 50.286638396875176, lng: 18.96723031997681 },
    { lat: 50.28697429853223, lng: 18.96772384643555 },
]