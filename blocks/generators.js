Blockly.Python['bh1750_light'] = function (block) {
  Blockly.Python.definitions_['import_BH1750'] = 'import BH1750';

  var dropdown_addr = block.getFieldValue('addr');

  var code = `BH1750.read(${dropdown_addr})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['bh1750_light'] = function (block) {
  Blockly.JavaScript.definitions_['include']['Wire.h'] = '#include <Wire.h>';
  Blockly.JavaScript.definitions_['include']['ArtronShop_BH1750.h'] = '#include <ArtronShop_BH1750.h>';

  var dropdown_addr = block.getFieldValue('addr');

  var functionName = Blockly.JavaScript.provideFunction_(
    `bh1750_read`,
    [
      'float ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(int addr) {',
      '  static ArtronShop_BH1750 * bh1750 = NULL;',
      '  static uint8_t last_addr = 0;',
      '  if ((!bh1750) || (last_addr != addr)) {',
      '    if (bh1750) {',
      '      delete bh1750;',
      '      bh1750 = NULL;',
      '    }',
      '    bh1750 = new ArtronShop_BH1750(addr, &Wire);',
      '    Wire.begin();',
      '    bh1750->begin();',
      '    last_addr = addr;',
      '  }',
      `  return bh1750->light();`,
      '}'
    ]
  );

  var code = `${functionName}(${dropdown_addr})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
