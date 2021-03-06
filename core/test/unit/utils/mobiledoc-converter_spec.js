var should = require('should'), // jshint ignore:line
    converter = require('../../../server/utils/mobiledoc-converter');

describe('Convert mobiledoc to HTML ', function () {
    var mobiledoc = {
        version: '0.3.1',
        atoms: [],
        cards: [
            ['markdown-card',
                {
                    pos: 'top',
                    card_name: 'markdown-card',
                    markdown: '#heading\n\n- list one\n- list two\n- list three'
                }
            ],
            ['markdown-card', {
                pos: 'top'
            }]
        ],
        markups: [],
        sections: [
            [1, 'p', [
                [0, [], 0, 'test']
            ]],
            [10, 0],
            [10, 1]
        ]
    };
    it('Converts a mobiledoc to HTML', function () {
        converter.render(mobiledoc).should.match('<p>test</p><div><h1 id="heading">heading</h1>\n\n<ul>\n<li>list one</li>\n<li>list two</li>\n<li>list three</li>\n</ul></div><div></div>');
    });
});
