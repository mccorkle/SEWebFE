export default (state = {}, action) => {
  switch (action.type) {
    case 'LOAD':
      return state = {
        "Type": "MyObjectBuilder_Refinery/LargeRefinery",
        "Name": "Refinery",
        "Id": 110679305426212711,
        "Inventories": [
          {
            "CurrentVolume": 0.0,
            "MaxVolume": 9.223372E+12
          },
          {
            "CurrentVolume": 0.013916,
            "MaxVolume": 9.223372E+12,
            "Items": [
              {
                "Type": "MyObjectBuilder_Ingot/Cobalt",
                "Amount": 33.9410858,
                "Mass": 33.9410858,
                "Volume": 0.0038014017
              },
              {
                "Type": "MyObjectBuilder_Ingot/Gold",
                "Amount": 1.131289,
                "Mass": 1.131289,
                "Volume": 5.88270268E-05
              },
              {
                "Type": "MyObjectBuilder_Ingot/Iron",
                "Amount": 79.19589,
                "Mass": 79.19589,
                "Volume": 0.0100578787
              }
            ]
          }
        ],
        "Properties": [
          {
            "Name": "OnOff",
            "Type": "Boolean",
            "Value": true
          },
          {
            "Name": "ShowInTerminal",
            "Type": "Boolean",
            "Value": true
          },
          {
            "Name": "ShowInInventory",
            "Type": "Boolean",
            "Value": true
          },
          {
            "Name": "ShowInToolbarConfig",
            "Type": "Boolean",
            "Value": true
          },
          {
            "Name": "Name",
            "Type": "StringBuilder",
            "Value": "Refinery"
          },
          {
            "Name": "ShowOnHUD",
            "Type": "Boolean",
            "Value": false
          },
          {
            "Name": "UseConveyor",
            "Type": "Boolean",
            "Value": true
          }
        ],
        "Actions": [
          "OnOff",
          "OnOff_On",
          "OnOff_Off",
          "UseConveyor"
        ]
      };
    case 'TOGGLE_PROPERTIES':
      state.Properties.map((property) => {
        if (property.Name === action.property) {
          property.Value = !property.Value;
        }
      });
      return state;

    case 'CHANGE_BLOCK_NAME':
      state.Name = action.newName;
      return state;
  }
}
