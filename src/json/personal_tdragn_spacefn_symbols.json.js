
// JavaScript should be written in ECMAScript 5.1.

const karabiner = require('../lib/karabiner')

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'Personal rules (@tdragn) SpaceFn symbols layer',
        maintainers: ['tdragn'],
        rules: [
          {
            description: 'SpaceFn symbols layer',
            available_since: '13.6.0',
            manipulators: [].concat(
              generateSpaceFnSymbol('q', 'quote', []),
              generateSpaceFnSymbol('w', 'comma', ["left_shift"]),
              generateSpaceFnSymbol('e', 'period', ["left_shift"]),
              generateSpaceFnSymbol('r', 'quote', ["left_shift"]),
              generateSpaceFnSymbol('t', 'period', []),
              generateSpaceFnSymbol('y', '7', ["left_shift"]),
              generateSpaceFnSymbol('u', 'grave_accent_and_tilde', []),
              generateSpaceFnSymbol('i', 'open_bracket', []),
              generateSpaceFnSymbol('o', 'close_bracket', []),
              generateSpaceFnSymbol('p', '5', ["left_shift"]),

              generateSpaceFnSymbol('a', '1', ["left_shift"]),
              generateSpaceFnSymbol('s', 'hyphen', ["left_shift"]),
              generateSpaceFnSymbol('d', 'equal_sign', ["left_shift"]),
              generateSpaceFnSymbol('f', 'equal_sign', []),
              generateSpaceFnSymbol('g', '3', ["left_shift"]),
              generateSpaceFnSymbol('h', 'backslash', ["left_shift"]),
              generateSpaceFnSymbol('j', 'semicolon', ["left_shift"]),
              generateSpaceFnSymbol('k', '9', ["left_shift"]),
              generateSpaceFnSymbol('l', '0', ["left_shift"]),
              generateSpaceFnSymbol('semicolon', 'slash', ["left_shift"]),

              generateSpaceFnSymbol('z', '6', ["left_shift"]),
              generateSpaceFnSymbol('x', 'slash', []),
              generateSpaceFnSymbol('c', '8', ["left_shift"]),
              generateSpaceFnSymbol('v', 'backslash', []),
              generateSpaceFnSymbol('b', 'comma', []),
              generateSpaceFnSymbol('n', 'grave_accent_and_tilde', ["left_shift"]),
              generateSpaceFnSymbol('m', '4', ["left_shift"]),
              generateSpaceFnSymbol('comma', 'open_bracket', ["left_shift"]),
              generateSpaceFnSymbol('period', 'close_bracket', ["left_shift"]),
              generateSpaceFnSymbol('slash', '5', ["left_shift"])
            )
          }
        ]
      },
      null,
      '  '
    )
  )
}

function generateSpaceFnSymbol(from_code, to_code, modifiers) {
  return [
    {
      type: 'basic',
      from: {
        key_code: from_code,
        modifiers: { optional: ['any'] },
      },
      to: [
        {
          key_code: to_code,
          modifiers: modifiers,
        },
      ],
      conditions: [
        {
          type: 'variable_if',
          name: 'spacefn_mode',
          value: 1,
        },
      ],
    }
  ];

}

main()
