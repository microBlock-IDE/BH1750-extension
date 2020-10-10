Blockly.Python['bh1750_light'] = function (block) {
  Blockly.Python.definitions_['import_BH1750'] = 'import BH1750';

  var dropdown_addr = block.getFieldValue('addr');

  var code = `BH1750.read(${dropdown_addr})`;
  return [code, Blockly.Python.ORDER_NONE];
};
