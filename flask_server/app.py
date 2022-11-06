from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from chat import get_response
import random


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


@app.post("/predict", strict_slashes=False)
def predict():
    body = request.json['body']
    print("Input: ", request.get_json(body))
    response = get_response(body)
    message = {"answer": response}
    print("Output: ", message)
    return jsonify(message)
    # TODO: check if text is valid
    # response = get_response(body)
    # message = {"answer": response}
    # print("Output: ", message)
    # return jsonify(message)


if __name__ == "__main__":
    app.run(debug=True)