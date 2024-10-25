import requests

url = 'https://pydefis.callicode.fr/defis/ExempleURL/get/Tolrom/3242d'
print("J'ai")
resp = requests.get(url)
print(resp)
print(dir(resp))

data = resp.content.decode('utf8')
print(data)

lines = data.split('\n')
print(lines)


# Résolution
n1 = int(lines[1])
n2 = int(lines[2])

print(n1, n2)

solution = n1+n2

data_solution = {
    'sig': lines[0],
    'rep': solution
}

print("J'ai")
resp2 = requests.post('https://pydefis.callicode.fr/defis/ExempleURL/post/Tolrom/3242d', json=data_solution)

print(resp2.content.decode('utf8'))
