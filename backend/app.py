from flask import Flask, request, jsonify
from flask_cors  import CORS
app = Flask(__name__)
CORS(app)

# In-memory storage for demonstration
faqs = [{
    "id":1,
    "title":"Tangerine",
    "question":"How is Tangerine Healthy?",
    "answer":"Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
    "image_url":"/Tangerine.png"
}]

@app.route('/faqs', methods=['GET'])
def get_faqs():
    return jsonify(faqs), 200

@app.route('/faqs/<int:id>', methods=['GET'])
def get_faq(id):
    faq = next((faq for faq in faqs if faq['id'] == id), None)
    if faq is None:
        return jsonify({"error": "FAQ not found"}), 404
    return jsonify(faq), 200

@app.route('/faqs', methods=['POST'])
def create_faq():
    data = request.get_json()
    if not all(key in data for key in ('title', 'question', 'answer', 'image_url')):
        return jsonify({"error": "Missing data"}), 400
    
    new_faq = {
        "id": len(faqs) + 1,
        "title": data['title'],
        "question": data['question'],
        "answer": data['answer'],
        "image_url": data['image_url']
    }
    faqs.append(new_faq)
    return jsonify(new_faq), 201

@app.route('/faqs/<int:id>', methods=['PUT'])
def update_faq(id):
    data = request.get_json()
    faq = next((faq for faq in faqs if faq['id'] == id), None)
    if faq is None:
        return jsonify({"error": "FAQ not found"}), 404

    faq.update({
        "title": data.get('title', faq['title']),
        "question": data.get('question', faq['question']),
        "answer": data.get('answer', faq['answer']),
        "image_url": data.get('image_url', faq['image_url'])
    })
    return jsonify(faq), 200

@app.route('/faqs/<int:id>', methods=['DELETE'])
def delete_faq(id):
    global faqs
    faqs = [faq for faq in faqs if faq['id'] != id]
    return jsonify({"message": "FAQ deleted"}), 200

@app.route('/', methods=['GET'])
def checkServer():
    return 'Healthy Server', 200

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=10000)
