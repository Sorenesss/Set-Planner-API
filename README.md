# Growtopia Set Planner

The `PlannerState` class is a JavaScript utility designed to manage and customize character appearance and equipment settings for Growtopia-related applications. It provides methods to set and retrieve various attributes such as equipped items, skin color, expressions, and more. Additionally, it supports generating and saving images based on the current state.

## Features

- **Equipment Management**: Set and manage equipped items (e.g., Hat, Hair, Face, Chest, Shirt, Pants, Feet, Back, Hand, Artifact).
- **Appearance Customization**: Customize skin color, expressions, hair dye, eye drops, contact lenses, and more.
- **Special Effects**: Configure special effects like Infinity Crown, Infinity Aura, Rift Cape, Rift Wings, and others.
- **Image Generation**: Generate and save images based on the current state using an external API.

## Installation

To use the `PlannerState` class, ensure you have Node.js installed. Then, add the `gtsetplanner.js` file to your project. Once you've done that, you are able to import it:

```javascript
const sp = require('./gtsetplanner.js');
```

## Usage

### Initialization

Create an instance of the PlannerState class:

```javascript
const planner = new sp.PlannerState();
```

### Customize 

Customize planner attributes:

```javascript
planner.setFace(1184); // Equip the face item with itemID 1184 (Mummy Mask)
planner.setSkinColor(5); // Set skin color to Tone 5
planner.setExpression(10); // Set expression to Tongue
//etc...
```

### Generating and Saving Images

Generate and save an image based on the current planner attributes:

```
planner.saveImage('plannerimage.png')
    .then(() => console.log('Image saved successfully!'))
    .catch((error) => console.error('Error saving image:', error));
```

## API Reference

### Methods

#### Equipment Management
- `setHat(itemID)`  
  Set a Hat item.  
  **Parameters**:  
  - `itemID` (number): The ID of the Hat item. Set to `0` to unequip.  

- `setHair(itemID)`  
  Set a Hair item.  
  **Parameters**:  
  - `itemID` (number): The ID of the Hair item. Set to `0` to unequip.  

- `setFace(itemID)`  
  Set a Face item.  
  **Parameters**:  
  - `itemID` (number): The ID of the Face item. Set to `0` to unequip.  

- `setChest(itemID)`  
  Set a Chest item.  
  **Parameters**:  
  - `itemID` (number): The ID of the Chest item. Set to `0` to unequip.  

- `setShirt(itemID)`  
  Set a Shirt item.  
  **Parameters**:  
  - `itemID` (number): The ID of the Shirt item. Set to `0` to unequip.  

- `setPants(itemID)`  
  Set a Pants item.  
  **Parameters**:  
  - `itemID` (number): The ID of the Pants item. Set to `0` to unequip.  

- `setFeet(itemID)`  
  Set a Feet item.  
  **Parameters**:  
  - `itemID` (number): The ID of the Feet item. Set to `0` to unequip.  

- `setBack(itemID)`  
  Set a Back item.  
  **Parameters**:  
  - `itemID` (number): The ID of the Back item. Set to `0` to unequip.  

- `setHand(itemID)`  
  Set a Hand item.  
  **Parameters**:  
  - `itemID` (number): The ID of the Hand item. Set to `0` to unequip.  

- `setArtifact(itemID)`  
  Set an Artifact item.  
  **Parameters**:  
  - `itemID` (number): The ID of the Artifact item. Set to `0` to unequip.  

---

#### Appearance Customization
- `setExpression(expression)`  
  Set an Expression.  
  **Parameters**:  
  - `expression` (number): The expression ID (0–34).  

- `setSkinColor(skincolor)`  
  Set a Skin Color.  
  **Parameters**:  
  - `skincolor` (number): The skin color ID (0–19).  

- `setCustomSkinColor(r, g, b, a)`  
  Set a Custom Skin Color.  
  **Parameters**:  
  - `r` (number): Red value (0–255).  
  - `g` (number): Green value (0–255).  
  - `b` (number): Blue value (0–255).  
  - `a` (number): Alpha value (0–255).  

- `setRoleSkin(roleskin)`  
  Set a Role Skin.  
  **Parameters**:  
  - `roleskin` (number): The role skin ID (0–6).  

- `setHairDye(r, g, b)`  
  Set a Hair Dye color mask.  
  **Parameters**:  
  - `r` (number): Red value (0–255).  
  - `g` (number): Green value (0–255).  
  - `b` (number): Blue value (0–255).  

- `setEyeDrops(r, g, b)`  
  Set an Eye Drops color mask.  
  **Parameters**:  
  - `r` (number): Red value (0–255).  
  - `g` (number): Green value (0–255).  
  - `b` (number): Blue value (0–255).  

- `setContactLenses(r, g, b)`  
  Set a Contact Lenses color mask.  
  **Parameters**:  
  - `r` (number): Red value (0–255).  
  - `g` (number): Green value (0–255).  
  - `b` (number): Blue value (0–255).  

- `setGesture(gesture)`  
  Set a Gesture.  
  **Parameters**:  
  - `gesture` (number): The gesture ID (0–3).  

---

#### Special Effects
- `PureBeingOfLightandShadow(version)`  
  Set Pure Being of Light and Shadow version.  
  **Parameters**:  
  - `version` (number): `0` for Shadow, `1` for Light.  

- `EquinoxScarf(season)`  
  Set Equinox Scarf season.  
  **Parameters**:  
  - `season` (number): `0` for Spring, `1` for Summer, `2` for Autumn, `3` for Winter.  

- `CrownOfSeasons(aura, trail)`  
  Set Crown of Seasons aura and trail.  
  **Parameters**:  
  - `aura` (number): Aura ID (0–4).  
  - `trail` (number): Trail ID (0–4).  

- `WillOfTheWild(version)`  
  Set Will of the Wild version.  
  **Parameters**:  
  - `version` (number): `0` for Fire, `1` for Water, `2` for Earth.  

- `GolemsGift(version)`  
  Set Golem's Gift version.  
  **Parameters**:  
  - `version` (number): `0` for Fire, `1` for Ice, `2` for Earth.  

- `PerilousPirateShip(version)`  
  Set Perilous Pirate Ship version.  
  **Parameters**:  
  - `version` (number): `0` for Pet, `1` for Ride (transmuted).  

- `InfinityCrown(basergb, gemrgb, crystalrgb, float, crystal, rays)`  
  Configure Infinity Crown.  
  **Parameters**:  
  - `basergb` (number[]): Base RGB color as `[R, G, B]`.  
  - `gemrgb` (number[]): Gem RGB color as `[R, G, B]`.  
  - `crystalrgb` (number[]): Crystal RGB color as `[R, G, B]`.  
  - `float` (boolean): Enable floating effect.  
  - `crystal` (boolean): Enable crystal effect.  
  - `rays` (boolean): Enable rays effect.  

- `InfinityAura(firergb, windrgb, spikesrgb, fire, wind, lightning, rocks, speedlines)`  
  Configure Infinity Aura.  
  **Parameters**:  
  - `firergb` (number[]): Fire RGB color as `[R, G, B]`.  
  - `windrgb` (number[]): Wind RGB color as `[R, G, B]`.  
  - `spikesrgb` (number[]): Spikes RGB color as `[R, G, B]`.  
  - `fire` (boolean): Enable fire effect.  
  - `wind` (boolean): Enable wind effect.  
  - `lightning` (boolean): Enable lightning effect.  
  - `rocks` (boolean): Enable rocks effect.  
  - `speedlines` (boolean): Enable speedlines effect.  

- `RiftCape(capergb, collarrgb, collar, closed, aura)`  
  Configure Rift Cape.  
  **Parameters**:  
  - `capergb` (number[]): Cape RGB color as `[R, G, B]`.  
  - `collarrgb` (number[]): Collar RGB color as `[R, G, B]`.  
  - `collar` (boolean): Enable collar.  
  - `closed` (boolean): Close the cape.  
  - `aura` (number): Aura ID (0–3).  

- `RiftWings(wingsrgb, metalrgb, closed, material)`  
  Configure Rift Wings.  
  **Parameters**:  
  - `wingsrgb` (number[]): Wings RGB color as `[R, G, B]`.  
  - `metalrgb` (number[]): Metal RGB color as `[R, G, B]`.  
  - `closed` (boolean): Close the wings.  
  - `material` (number): Material ID (0–2).  

- `MinokawaWings(wing, pet)`  
  Configure Minokawa Wings.  
  **Parameters**:  
  - `wing` (boolean): Enable wings.  
  - `pet` (boolean): Enable pet.  

- `WingsOfAhool(wing, pet)`  
  Configure Wings of Ahool.  
  **Parameters**:  
  - `wing` (boolean): Enable wings.  
  - `pet` (boolean): Enable pet.  

- `CelestialDragonCharm(version)`  
  Set Celestial Dragon Charm version.  
  **Parameters**:  
  - `version` (number): `0` for Day, `1` for Sunset/Sunrise, `2` for Midnight.  

- `InfinityFist(basergb, accentrgb, gemsrgb)`  
  Configure Infinity Fist.  
  **Parameters**:  
  - `basergb` (number[]): Base RGB color as `[R, G, B]`.  
  - `accentrgb` (number[]): Accent RGB color as `[R, G, B]`.  
  - `gemsrgb` (number[]): Gems RGB color as `[R, G, B]`.  

- `BannerBandolier(pattern)`  
  Set Banner Bandolier pattern.  
  **Parameters**:  
  - `pattern` (number): Pattern ID (0–4).  

---

#### Image Generation
- `getImage()`  
  Generate and return a buffer image.  
  **Returns**:  
  - `Promise<Buffer>`: The image buffer.  

- `saveImage(filename)`  
  Generate and save an image.  
  **Parameters**:  
  - `filename` (string): The file name to save the image.  
  **Returns**:  
  - `Promise<void>`: Resolves when the image is saved.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
