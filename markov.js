function Markov(text) {
    this.nextWords = {};
    this.consumeText(text);
}
Markov.prototype = {
    consumeText: function(text) {
        var words = text.split(/[ \.]/);

        if (words.length <= 1) {
            throw new TypeError("No spaces or dots found on your text.");
        }
        this.nextWords[''] = [];
        this.nextWords[''].push(words[0]);
        for (var i = 0; i < words.length - 1; ++i) {
            if (!(words[i] in this.nextWords)) {
                this.nextWords[words[i]] = [];
            }
            this.nextWords[words[i]].push(words[i + 1]);
        }
    },

    pickNextWord: function(previous) {
        return this.nextWords[previous][
            Math.floor(Math.random() * (this.nextWords[previous].length - 1))
        ];
    },

    wordsToText: function(words) {
        var ret = '';
        for (i = 0; i < words.length; ++i) {
            if (i == 0) {
                ret += words[i];
                continue;
            }
            if (words[i] == '') {
                ret += '.';
                continue;
            }
            ret += ' ' + words[i];
        }
        return ret;
    },

    constructText: function(length) {
        var words = [];
        while (words.length < length || words[words.length - 1] != '') {
            var previous = '';
            if (words.length > 0) {
                previous = words[words.length - 1];
            }

            words.push(this.pickNextWord(previous));
        }
        return this.wordsToText(words);
    }
};
