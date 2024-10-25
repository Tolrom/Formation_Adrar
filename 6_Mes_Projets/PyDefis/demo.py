d = {'a': 0, 'b': 1, 'aa': 2, 14: 0}

for i in range(10):
    d[i] = i**2

print(d)

# for k in d:
#     print(k)

# for k in d.keys():
#     print(k)

# for v in d.values():
#     print(v)

for k, v in d.items():
    print(k, '->', v)


# import collections
# collections.Counters
from collections import Counter

c = Counter([1,4,5,2,1,0])
print(c)

c = Counter('avenue de truc')
print(c.most_common(3))