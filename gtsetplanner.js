const fs = require('fs'); // Import the file system module

class PlannerState {
    // Define private fields with #
    #equipped;
    #expression;
    #skincolor;
    #customskincolor;
    #roleskin;
    #dyes;
    #drops;
    #lenses;
    #purebeingtrigger;
    #equinox;
    #crownseasons;
    #willofthewild;
    #golgift;
    #perilous;
    #infinitycrown;
    #infinityaura;
    #riftcape;
    #riftwings;
    #minokawa;
    #ahool;
    #celesdragcharm;
    #handmovement;
    #artlevel;
    #infinityfist;
    #bbandolier;
    #anomaly;

    constructor() {
        this.#equipped = [0,0,0,0,0,0,0,0,0,0];
        this.#expression = 0;
        this.#skincolor = 0;
        this.#customskincolor = [240, 240, 240, 255];
        this.#roleskin = 0;
        this.#dyes = [255, 255, 255];
        this.#drops = [255, 255, 255];
        this.#lenses = [0, 0, 0];
        this.#purebeingtrigger = 0;
        this.#equinox = 0;
        this.#crownseasons = [0, 0];
        this.#willofthewild = 0;
        this.#golgift = 0;
        this.#perilous = 0;
        this.#infinitycrown = [[255, 200, 37], [255, 0, 64], [26, 45, 140], false, true, true, true];
        this.#infinityaura = [[63, 251, 255], [255, 255, 255], [255, 255, 255], false, true, true, true, false, true, true];
        this.#riftcape = [[147, 56, 143], [147, 56, 143], true, false, 3];
        this.#riftwings = [[93, 22, 200], [220, 72, 255], true, 0];
        this.#minokawa = [true, true];
        this.#ahool = [true, true];
        this.#celesdragcharm = 0;
        this.#handmovement = 0;
        this.#artlevel = 0;
        this.#infinityfist = [[122, 10, 250], [65, 65, 65], [78, 255, 0], 0];
        this.#bbandolier = ['harlequin', 0];
        this.#anomaly = 0;
    }

    // Method to return a public version of the private data as an object
    #toObject() {
        return {
            equipped: this.#equipped.filter((number) => number),
            expression: this.#expression,
            skincolor: this.#skincolor,
            customskincolor: this.#customskincolor,
            roleskin: this.#roleskin,
            dyes: this.#dyes,
            drops: this.#drops,
            lenses: this.#lenses,
            purebeingtrigger: this.#purebeingtrigger,
            equinox: this.#equinox,
            crownseasons: this.#crownseasons,
            willofthewild: this.#willofthewild,
            golgift: this.#golgift,
            perilous: this.#perilous,
            infinitycrown: this.#infinitycrown,
            infinityaura: this.#infinityaura,
            riftcape: this.#riftcape,
            riftwings: this.#riftwings,
            minokawa: this.#minokawa,
            ahool: this.#ahool,
            celesdragcharm: this.#celesdragcharm,
            handmovement: this.#handmovement,
            artlevel: this.#artlevel,
            infinityfist: this.#infinityfist,
            bbandolier: this.#bbandolier,
            anomaly: this.#anomaly
        };
    }

    /**
     * Generates and returns a bufferImage.
     */
    async getImage() {
        try {
          const response = await fetch('https://gtsetplanner.com/api', {
            method: 'POST',
            body: JSON.stringify(this.#toObject())
          });
          const base64Data = await response.text();
          // Remove the data:image/png;base64, prefix if it exists
          const base64Image = base64Data.replace(/^data:image\/png;base64,/, '');
          
          // Convert base64 to buffer and return it
          return Buffer.from(base64Image, 'base64');
        } catch (error) {
          console.error('Error:', error);
          throw error;
        }
    }

    /**
     * Generates and saves an image based on the current planner state.
     *
     * @param {string} filename - Choose a filename to which the image is stored (Example: plannerimage.png)
     */
    async saveImage(filename) {
        try {
            const imageBuffer = await this.getImage();
            fs.writeFileSync(filename, imageBuffer);
        } catch (error) {
            console.error('Error saving image:', error);
        }
    }

    /**
     * Set a Hat item.
     *
     * * @param {number} itemID - Choose a Hat item, represented as an itemID. To unequip the Hat item, set itemID to 0.
     */
    setHat(itemID=0){
        this.#equipped[0] = itemID.toString();
    }

    /**
     * Set a Hair item.
     *
     * * @param {number} itemID - Choose a Hair item, represented as an itemID. To unequip the Hair item, set itemID to 0.
     */
    setHair(itemID=0){
        this.#equipped[1] = itemID.toString();
    } 

    /**
     * Set a Face item.
     *
     * * @param {number} itemID - Choose a Face item, represented as an itemID. To unequip the Face item, set itemID to 0.
     */
    setFace(itemID=0){
        this.#equipped[2] = itemID.toString();
    }

    /**
     * Set a Chest item.
     *
     * * @param {number} itemID - Choose a Chest item, represented as an itemID. To unequip the Chest item, set itemID to 0.
     */
    setChest(itemID=0){
        this.#equipped[3] = itemID.toString();
    }

    /**
     * Set a Shirt item.
     *
     * * @param {number} itemID - Choose a Shirt item, represented as an itemID. To unequip the Shirt item, set itemID to 0.
     */
    setShirt(itemID=0){
        this.#equipped[4] = itemID.toString();
    } 

    /**
     * Set a Pants item.
     *
     * * @param {number} itemID - Choose a Pants item, represented as an itemID. To unequip the Pants item, set itemID to 0.
     */
    setPants(itemID=0){
        this.#equipped[5] = itemID.toString();
    }

    /**
     * Set a Feet item.
     *
     * * @param {number} itemID - Choose a Feet item, represented as an itemID. To unequip the Feet item, set itemID to 0.
     */
    setFeet(itemID=0){
        this.#equipped[6] = itemID.toString();
    }

    /**
     * Set a Back item.
     *
     * * @param {number} itemID - Choose a Back item, represented as an itemID. To unequip the Back item, set itemID to 0.
     */
    setBack(itemID=0){
        this.#equipped[7] = itemID.toString();
    }

    /**
     * Set a Hand item.
     *
     * * @param {number} itemID - Choose an Hand item, represented as an itemID. To unequip the Hand item, set itemID to 0.
     */
    setHand(itemID=0){
        this.#equipped[8] = itemID.toString();
    }
  
    /**
     * Set an Artifact item.
     *
     * * @param {number} itemID - Choose an Artifact item, represented as an itemID. To unequip the Artifact item, set itemID to 0.
     */
    setArtifact(itemID=0){
        this.#equipped[9] = itemID.toString();
    }

    /**
     * Set an Expression.
     * 
     * @param {number} expression - Choose an Expression:
     * - 0: Default
     * - 1: Jump 1
     * - 2: Jump 2
     * - 3: Pain
     * - 4: Punch
     * - 5: Respawn
     * - 6: Duct Tape
     * - 7: Make-Up
     * - 8: Smile
     * - 9: Sad 1
     * - 10: Tongue
     * - 11: OMG
     * - 12: Mad
     * - 13: Talk
     * - 14: IDK
     * - 15: Laugh
     * - 16: Sad 2
     * - 17: Sassy
     * - 18: Sleep 1
     * - 19: Sleep 2
     * - 20: Wink
     * - 21: Love
     * - 22: Troll
     * - 23: Vampire
     * - 24: Sabertooth
     * - 25: Mannequin
     * - 26: Sing 1
     * - 27: Sing 2
     * - 28: Swim
     * - 29: Sleep 3
     * - 30: Roll Eyes
     * - 31: Flushed
     * - 32: -_-
     * - 33: Shy
     * - 34: Grumpy
     */
    setExpression(expression){
        this.#expression = expression;
    }

    /**
     * Set a Skin Color.
     * 
     * @param {number} skincolor - Choose a Skin Color:
     * - 0: White
     * - 1: Tone 1
     * - 2: Tone 2
     * - 3: Tone 3
     * - 4: Tone 4
     * - 5: Tone 5
     * - 6: Tone 6
     * - 7: Tone 7
     * - 8: Tone 8
     * - 9: Light Green
     * - 10: Cyan
     * - 11: Red
     * - 12: Green
     * - 13: Purple
     * - 14: Blue
     * - 15: Light Blue
     * - 16: Orange
     * - 17: Red (Transparent)
     * - 18: Purple (Transparent)
     * - 19: Cyan (Transparent)
     */
    setSkinColor(skincolor){
        this.#skincolor = skincolor%20;
    }

    /**
     * Set a Custom Skin Color.
     * Default: [240,240,240,255]
     * 
     * @param {number} r - R value of the Custom Skin Color.
     * @param {number} g - G value of the Custom Skin Color.
     * @param {number} b - B value of the Custom Skin Color.
     * @param {number} a - A value of the Custom Skin Color.
     */
    setCustomSkinColor(r, g, b, a){
        this.#customskincolor = [
          Math.min(255, Math.max(0, r)),
          Math.min(255, Math.max(0, g)),
          Math.min(255, Math.max(0, b)),
          Math.min(255, Math.max(0, a))
        ];
        this.#skincolor = 20;
    }

    /**
     * Settings for Role Skin.
     * 
     * @param {number} Choose a Role Skin:
     * - 0: Default
     * - 1: Farmer
     * - 2: Surgeon
     * - 3: Builder
     * - 4: Fishing
     * - 5: Star Captain
     * - 6: Chef
     */
    setRoleSkin(roleskin){
        this.#roleskin = roleskin%7;
    }

    /**
     * Set a Hair Dye color mask.
     * Default: [255,255,255]
     * 
     * @param {number} r - R value of the RGB Hair Dye mask
     * @param {number} g - G value of the RGB Hair Dye mask
     * @param {number} b - B value of the RGB Hair Dye mask
     */
    setHairDye(r, g, b){
        this.#dyes = [
            Math.min(255, Math.max(0, r)),
            Math.min(255, Math.max(0, g)),
            Math.min(255, Math.max(0, b))
        ];
    }

    /**
     * Return the RGB value of the Hair Dye mask, represented as an array of 3 numbers [R, G, B], where each number is between 0 and 255
     */
    getHairDye(){
        return this.#dyes;
    }

    /**
     * Set an Eye Drops color mask.
     * Default: [255,255,255]
     * 
     * @param {number} r - R value of the RGB Eye Drops mask
     * @param {number} g - G value of the RGB Eye Drops mask
     * @param {number} b - B value of the RGB Eye Drops mask
     */
    setEyeDrops(r, g, b){
        this.#drops = [
            Math.min(255, Math.max(0, r)),
            Math.min(255, Math.max(0, g)),
            Math.min(255, Math.max(0, b))
        ];
    }

    /**
     * Return the RGB value of the Eye Drops mask, represented as an array of 3 numbers [R, G, B], where each number is between 0 and 255
     */
    getEyeDrops(){
        return this.#drops;
    }

    /**
     * Set a Contact Lenses color mask.
     * Default: [0,0,0]
     * 
     * @param {number} r - R value of the RGB Contact Lenses mask
     * @param {number} g - G value of the RGB Contact Lenses mask
     * @param {number} b - B value of the RGB Contact Lenses mask
     */
    setContactLenses(r, g, b){
        this.#lenses = [
            Math.min(255, Math.max(0, r)),
            Math.min(255, Math.max(0, g)),
            Math.min(255, Math.max(0, b))
        ];
    }

    /**
     * Return the RGB value of the Contact Lenses mask, represented as an array of 3 numbers [R, G, B], where each number is between 0 and 255
     */
    getContactLenses(){
        return this.#lenses;
    }

    /**
     * Settings for Gesture.
     * 
     * @param {number} Choose a Gesture:
     * - 0: Default
     * - 1: Thumbs Up
     * - 2: Thumbs Down
     * - 3: Pointing
     */
    setGesture(gesture){
        this.#handmovement=gesture%4;
    }

    /**
     * Settings for Pure Being of Light and Shadow.
     * 
     * @param {number} version - The Will of the Wild's version:
     * - 0: shadow
     * - 1: light
     */
    PureBeingOfLightandShadow(version){
        this.#purebeingtrigger=version%2;
    }

    /**
     * Settings for Equinox Scarf.
     * 
     * @param {number} season - The Equinox Scarf's season:
     * - 0: Spring
     * - 1: Summer
     * - 2: Autumn
     * - 3: Winter
     */
    EquinoxScarf(season){
        this.#equinox=season%4;
    }

    /**
     * Settings for Crown of Seasons.
     * 
     * @param {number} aura - The Crown of Seasons' aura:
     * - 0: None
     * - 1: Spring
     * - 2: Summer
     * - 3: Autumn
     * - 4: Winter
     * @param {number} trail - The Crown of Seasons' trail:
     * - 0: None
     * - 1: Spring
     * - 2: Summer
     * - 3: Autumn
     * - 4: Winter
     */
    CrownOfSeasons(aura, trail){
        this.#crownseasons[0]=aura%5;
        this.#crownseasons[1]=trail%5;
    }

    /**
     * Settings for Will of the Wild.
     * 
     * @param {number} version - The Will of the Wild's version:
     * - 0: Fire
     * - 1: Water
     * - 2: Earth
     */
    WillOfTheWild(version){
        this.#willofthewild=version%3;
    }

    /**
     * Settings for Golem's Gift.
     * 
     * @param {number} version - The Golem's Gift's version:
     * - 0: Fire
     * - 1: Ice
     * - 2: Earth
     */
    GolemsGift(version){
        this.#golgift=version%3;
    }

    /**
     * Settings for Perilous Pirate Ship.
     * 
     * @param {number} version - The Perilous Pirate Ship's version:
     * - 0: Pet
     * - 1: Ride (transmuted)
     */
    PerilousPirateShip(version){
        this.#perilous=version%2;
    }

    /**
     * Settings for Anomaly Aura.
     * 
     * @param {number} version - The Anomaly Aura's version:
     * - 0: Dark Anomaly
     * - 1: Light Anomaly
     */
    AnomalyAura(version){
        this.#perilous=version%2;
    }

    /**
     * Settings for Infinity Crown.
     * 
     * @param {number[]} basergb - The Crown's Base RGB color, represented as an array of 3 numbers [R, G, B], where each number is between 0 and 255.
     * @param {number[]} gemrgb - The Crown's Gem RGB color, represented as an array of 3 numbers [R, G, B], where each number is between 0 and 255.
     * @param {number[]} crystalrgb - The Crown's Crystal RGB color, represented as an array of 3 numbers [R, G, B], where each number is between 0 and 255.
     * @param {boolean} float - Render the floating effect.
     * @param {boolean} wind - Render the crystal effect.
     * @param {boolean} rays - Render the rays effect.
     */
    InfinityCrown(basergb, gemrgb, crystalrgb, float, crystal, rays){
        this.#infinitycrown=[basergb, gemrgb, crystalrgb, float, crystal, rays];
    }

    /**
     * Settings for Infinity Aura.
     * 
     * @param {number[]} firergb - The Fire RGB color, represented as an array of 3 numbers [R, G, B], where each number is between 0 and 255.
     * @param {number[]} windrgb - The Wind RGB color, represented as an array of 3 numbers [R, G, B], where each number is between 0 and 255.
     * @param {number[]} spikesrgb - The Spikes RGB color, represented as an array of 3 numbers [R, G, B], where each number is between 0 and 255.
     * @param {boolean} fire - Render the fire effect.
     * @param {boolean} wind - Render the wind effect.
     * @param {boolean} lightning - Render the lightning effect.
     * @param {boolean} rocks - Render the rocks effect.
     * @param {boolean} speedlines - Render the speedlines effect.
     */
    InfinityAura(firergb, windrgb, spikesrgb, fire, wind, lightning, rocks, speedlines){
        this.infinityaura=[firergb, windrgb, spikesrgb, false, fire, wind, lightning, rocks, speedlines];
    }

    /**
     * Settings for Rift Cape.
     * 
     * @param {number[]} capergb - The Cape RGB color, represented as an array of 3 numbers [R, G, B], where each number is between 0 and 255.
     * @param {number[]} collarrgb - The Collar RGB color, represented as an array of 3 numbers [R, G, B], where each number is between 0 and 255.
     * @param {boolean} closed - Is the Rift Cape closed?
     * @param {number} aura - The Rift Cape's Aura:
     * - 0: None
     * - 1: Portal
     * - 2: Starfield
     * - 3: Electrical
     */
    RiftCape(capergb, collarrgb, collar, closed, aura){
        this.#riftcape=[capergb, collarrgb, collar, closed, aura%4];
    }

    /**
     * Settings for Rift Wings.
     * 
     * @param {number[]} wingsrgb - The Wings RGB color, represented as an array of 3 numbers [R, G, B], where each number is between 0 and 255.
     * @param {number[]} metalrgb - The Metal RGB color, represented as an array of 3 numbers [R, G, B], where each number is between 0 and 255.
     * @param {boolean} closed - Are the Rift Wings closed?
     * @param {number} material - The material of the Wings:
     * - 0: Feathers
     * - 1: Blades
     * - 2: Scales
     */
    RiftWings(wingsrgb, metalrgb, closed, material){
        this.#riftwings=[wingsrgb, metalrgb, closed, material%3];
    }

    /**
     * Settings for Minokawa Wings.
     * 
     * @param {boolean} wing - Choose if the wings should appear.
     * @param {boolean} pet - Choose if the pet should appear.
     */
    MinokawaWings(wing, pet){
        this.#minokawa=[wing, pet];
    }

    /**
     * Settings for Wings of Ahool.
     * 
     * @param {boolean} wing - Choose if the wings should appear.
     * @param {boolean} pet - Choose if the pet should appear.
     */
    WingsOfAhool(wing, pet){
        this.#ahool=[wing, pet];
    }

    /**
     * Settings for Celestial Dragon Charm.
     * 
     * @param {number} version - The Celestial Dragon Charm's version:
     * - 0: Day (Default)
     * - 1: Sunset/Sunrise
     * - 2: Midnight
     */
    CelestialDragonCharm(version){
        this.#celesdragcharm=version%3;
    }

    /**
     * Settings for Adventurer's Whip.
     * 
     * @param {number} version - The Adventurer's Whip's version based on the level of the Ancestral Seed of Life:
     * - 0: Seed of Life : Level 0 (Default)
     * - 1: Seed of Life : Level 2
     * - 2: Seed of Life : Level 4
     */
    AdventurersWhip(version){
        this.#artlevel[0]=version%3;
    }

    /**
     * Settings for Techno Visor.
     * 
     * @param {number} version - The Techno Visor's version based on the level of the Ancestral Tesseract of Dimensions:
     * - 0: Tesseract of Dimensions : Level 0 (Default)
     * - 1: Tesseract of Dimensions : Level 2
     * - 2: Tesseract of Dimensions : Level 4
     */
    TechnoVisor(version){
        this.#artlevel[1]=version%3;
    }

    /**
     * Settings for Monocle.
     * 
     * @param {number} version - The Monocle's version based on the level of the Ancestral Lens of Riches:
     * - 0: Lens of Riches : Level 0 (Default)
     * - 1: Lens of Riches : Level 2
     * - 2: Lens of Riches : Level 4
     */
    Monocle(version){
        this.#artlevel[2]=version%3;
    }

   /**
   * Settings for Winter Robe.
   * 
   * @param {number} version - The Winter Robe's version based on the level of the Ancestral Totem of Wisdom:
   * - 0: Totem of Wisdom : Level 0 (Default)
   * - 1: Totem of Wisdom : Level 2
   * - 2: Totem of Wisdom : Level 4
   */
    WinterRobe(version){
        this.#artlevel[3]=version%3;
    }
  
    /**
     * Settings for Soul Orb.
     * 
     * @param {number} version - The Soul Orb's version based on the level of the Ancestral Orb of Time:
     * - 0: Soul Orb of Time : Level 0 (Default)
     * - 1: Soul Orb of Time : Level 2
     * - 2: Soul Orb of Time : Level 4
     */
    SoulOrb(version){
        this.#artlevel[4]=version%3;
    }

    /**
     * Settings for Infinity Fist.
     * 
     * @param {number[]} basergb - The Weapon's Base RGB color, represented as an array of 3 numbers [R, G, B], where each number is between 0 and 255.
     * @param {number[]} accentrgb - The Weapon's Accent RGB color, represented as an array of 3 numbers [R, G, B], where each number is between 0 and 255.
     * @param {number[]} gemsrgb - The Weapon's Gem RGB color, represented as an array of 3 numbers [R, G, B], where each number is between 0 and 255.
     */
    InfinityFist(basergb, accentrgb, gemsrgb){
        this.#infinityfist=[basergb, accentrgb, gemsrgb, 0];
    }

    /**
     * Settings for Banner Bandolier.
     * 
     * @param {number} pattern - The Banner Bandolier's pattern:
     * - 0: Harlequin
     * - 1: Slant
     * - 2: Stripe
     * - 3: Panel
     * - 4: Cross
     */
    BannerBandolier(pattern){
        const patterns = ['harlequin', 'slant', 'stripe', 'panel', 'cross'];
        this.#bbandolier=[patterns[pattern%5], 0];
    }
}
