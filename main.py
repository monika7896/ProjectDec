from flask import Flask, jsonify, request

app = Flask(__name__)

books = {
    1: {"id": 1, "name": "John Doe", "email": "johndoe@example.com"},
    2: {"id": 2, "name": "Jane Smith", "email": "janesmith@example.com"},
}

print("Push test")
# dfdsfkjbk


@app.route("/books", methods=["GET"])
def getbooks():
    return books


# @app.route("/books2", methods=["GET"])
# def getbooks():
#     return books


if __name__ == "__main__":
    app.run()


from flask import Flask, jsonify, request

app = Flask(__name__)

books = {
    1: {"id": 1, "name": "John Doe", "email": "johndoe@example.com"},
    2: {"id": 2, "name": "Jane Smith", "email": "janesmith@example.com"},
}

print("Push test")
print("Push test")


@app.route("/books", methods=["GET"])
def getbooks():
    return books


if __name__ == "__main__":
    app.run()
