import immutable from 'immutable';
import fuzzy from 'fuzzy';

const fakeInventoryList = [{
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
]},
  {
    "Type": "MyObjectBuilder_Refinery/LargeRefinery",
    "Name": "BarBaz",
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
    ]},
  {
    "Type": "MyObjectBuilder_Refinery/LargeRefinery",
    "Name": "Foo",
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
    ]}];

const defaultState = immutable.Map({
  inventoryList: [],
  selectedInventory: [],
  filteredInventoryList: [],
  search: null
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD':
      return state.set('inventoryList', immutable.fromJS(fakeInventoryList));

    case 'TOGGLE_PROPERTIES':
      return state.get('inventoryList').first().get('Properties').map((property) => {
        if (property.get('Name') === action.property) {
          property.set('Value', !property.get('Value'));
        }
      });

    case 'CHANGE_BLOCK_NAME':
      return state.get('inventoryList').first().set('Name', action.newName);

    case 'SELECT_INVENTORY_BLOCK':
      return state.set('selectedInventory', state.get('selectedInventory').push(action.id));

    case 'DESELECT_INVENTORY_BLOCK':
      const index = state.get('selectedInventory').indexOf(action.id);
      return state.set('selectedInventory', state.get('selectedInventory').splice(index, 1));

    case 'SEARCH_INVENTORY_LIST':
      const results = fuzzy.filter(action.newValue, state.get('inventoryList'), {extract: (el) => el.get('Name')}).map((item) => item.string);
      const newFilteredList = state.get('inventoryList').filter((item) => results.includes(item.get('Name')));
      const newState = state.set('filteredInventoryList', newFilteredList);
      return newState.set('search', action.newValue);
  }
}
