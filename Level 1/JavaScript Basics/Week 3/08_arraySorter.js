function sortArray(input) {
    var tmp, tmp2;
    for (var i = 0; i < input.length - 1; i++)
    {
        tmp = i;
        for (var j = i + 1; j < input.length; j++)
            if (input[j] < input[tmp])
                tmp = j;

        tmp2 = input[tmp];
        input[tmp] = input[i];
        input[i] = tmp2;
    }
    console.log(input.join(", "))
}
sortArray([5, 4, 3, 2, 1]);
sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);