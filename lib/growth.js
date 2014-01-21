module.exports = function(prev, current, years) { 
    var yrs = years || 1,
        growth,
        doubles = 0,
        doubleRate = .0,
        square = prev;

    if (yrs === 1) {
        growth = ((current-prev)/prev);
        square = prev * 2;
        while (prev < square) {
            doubles++;
            prev = prev + (prev * growth);
            if (prev/square > .85) {
                prev = square;
            }
        }
        return 72/doubles;
    }

    while (square < current) {
        doubles++;
        square = square * 2;
    }

    if (current/square < .85) {
        doubles--;
        if (doubles === 1 && yrs > 1) {
            yrs--;
        }
    }

    doubleRate = yrs/(doubles || 1);
    return 72/doubleRate;
};
