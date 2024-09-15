import requests
from PIL import Image
import base64
from io import BytesIO

# State dictionary that mimics your provided JavaScript object
class PlannerState():
    def __init__(self):
      self.equipped = [] #List of equipped itemIDs
      self.expression = 0 #Number between 0 and 34
      self.skincolor = 0 #Number between 0 and 20
      self.customskincolor = [240, 240, 240, 255] #Skincolor that will appear when skincolor is set to 20
      self.roleskin = 0 #Number between 0 and 6
      self.dyes = [255, 255, 255] #RGB mask for Hair Dyes
      self.drops = [255, 255, 255] #RGB mask for Eye Drops
      self.lenses = [0, 0, 0] #RGB mask for Contact Lenses
      self.purebeingtrigger = 0 #Customization for Pure Being of Light and Shadows
      self.equinox = 0 #Customization for Equinox Scarf
      self.crownseasons = [0, 0] #Customization for Crown of Seasons [aura, horn]
      self.willofthewild =  0 #Customization for Will of the Wild
      self.golgift = 0 #Customization for Golem's Gift
      self.perilous = 0 #Customization for Perilous Pirate Ship
      self.infinitycrown = [[255, 200, 37], [255, 0, 64], [26, 45, 140], False, True, True, True] #Customization for Infinity Crown
      self.infinityaura = [[63, 251, 255], [255, 255, 255], [255, 255, 255], False, True, True, True, False, True, True] #Customization for Infinity Aura
      self.riftcape = [[147, 56, 143], [147, 56, 143], True, False, 3] #Customization for Rift Cape
      self.riftwings = [[93, 22, 200], [220, 72, 255], True, 0] #Customization for Rift Wings
      self.minokawa = [True, True] #Customization for Minokawa Wings
      self.ahool = [True, True] #Customization for Wings of Ahool
      self.celesdragcharm = 0 #Customization for Celestial Dragon Charm

    # Method to convert the class to a dictionary
    def to_dict(self):
        return self.__dict__

    # Method to get image from state
    def getImage(self):
        response = requests.post("https://gtsetplanner.com/api", json=self.to_dict())
        if response.status_code == 200:
            # Save the image as a PNG file (assuming the API returns a PNG)
            with open('response_image.png', 'wb') as file:
                img = Image.open(BytesIO(base64.b64decode(response.content)))
            return img
        else:
            return None
