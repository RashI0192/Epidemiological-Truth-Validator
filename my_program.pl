likes(mary, pizza).
likes(john, pizza).
likes(john, wine).

friend(X, Y) :- likes(X, Z), likes(Y, Z), X \= Y.
