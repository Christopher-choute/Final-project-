from flask import Flask, make_response, request, jsonify, session
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS
from sqlalchemy.exc import IntegrityError

from config import app, db, api
from models import Fish, Fishtank,FishSpeciesTank,User

# Views go here!
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
app.secret_key = 'super secret key'
migrate = Migrate(app, db)


db.init_app(app)

api = Api(app)

@app.route('/')
def home():
    return ''

@app.route('/fishes', methods=['GET', 'POST'])
def fish():
    if request.method == 'GET':
        fishes = Fish.query.all()
        fishes_dict = [fish.to_dict() for fish in fishes]

        response = make_response(
            jsonify(fishes_dict),
            200
        )

        return response
    

    elif request.method == 'POST':

        try:
            new_fish = Fish(
                species = request.get_json()['species'],
                tank_size = request.get_json()['tank_size'],
                water_preference = request.get_json()['water_preference'],
                temperature_preference = request.get_json()['temperature_preference'],
                image = request.get_json()['image'],
                aggressiveness = request.get_json()['aggressiveness'],
                life_expectancy = request.get_json()['life_expectancy'],
                price = request.get_json()['price'],
                description = request.get_json()['description']
            )
            db.session.add(new_fish)
            db.session.commit()

            response = make_response(
                new_fish.to_dict(),
                201
            )

        except ValueError:

            response = make_response(
                {"error": "validation errors"},
                400
            )
    return response

@app.route('/fishes/<int:id>', methods=['GET', 'DELETE', 'PATCH'])
def fishById(id):
    fish = Fish.query.filter_by(id=id).first()

    # if not fish:
    #     return make_response({'error': 'Fish Not Found!'}, 404)
    
    # return make_response(fish.to_dict(), 200) 
    fish = Fish.query.filter_by(id=id).first()

    if request.method == 'GET':
        if fish:
            fish_dict = fish.to_dict()

            response = make_response(
                jsonify(fish_dict),
                200
            )
        else:
            response = make_response(
                {"error": "Fish not found"},
                404
            )

        return response
    
    elif request.method == 'DELETE':
        fish = Fish.query.filter(Fish.id == id).first()

        if not fish:
            response = make_response(
                {"error": "Fish not found"},
                404
            )
            return response
        
        db.session.delete(fish)
        db.session.commit()
        return make_response({'success': 'Fish deleted'}, 200)
    
    elif request.method == 'PATCH':
        fish = Fish.query.filter(Fish.id == id).first()

        if not fish:
            response = make_response(
                {"error": "Fish not found"},
                404
            )
            return response
        
        for attr in request.get_json():
            setattr(fish, attr, request.get_json()[attr])

        db.session.add(fish)
        db.session.commit()

        return make_response(
            fish.to_dict(),
            200
        )


@app.route('/fishtanks', methods=['GET'])
def fishtank():
    fishtanks = Fishtank.query.all()
    fishtanks_dict = [fishtank.to_dict() for fishtank in fishtanks]

    response = make_response(
        jsonify(fishtanks_dict),
        200
    )

    return response

class Signup(Resource):
    
    def post(self):

        request_json = request.get_json()

        username = request_json.get('username')
        password = request_json.get('password')
        image_url = request_json.get('image_url')
        bio = request_json.get('bio')

        user = User(
            username=username,
            image_url=image_url,
            bio=bio
        )

        # the setter will encrypt this
        user.password_hash = password

        print('first')

        try:

            print('here!')

            db.session.add(user)
            db.session.commit()

            session['user_id'] = user.id

            print(user.to_dict())

            return user.to_dict(), 201

        except IntegrityError as ie:
            
            print(ie.orig)
            print(ie.statement)
            return {'error': '422 Unprocessable Entity'}, 422
        
class CheckSession(Resource):
    
    def get(self):

        if session.get('user_id'):

            user = User.query.filter(User.id == session['user_id']).first()

            return user.to_dict(), 200

        return {'error': '401 Unauthorized'}, 401
    
class Login(Resource):
    
    def post(self):

        request_json = request.get_json()

        username = request_json.get('username')
        password = request_json.get('password')

        user = User.query.filter(User.username == username).first()

        if user:
            if user.authenticate(password):

                session['user_id'] = user.id
                return user.to_dict(), 200

        return {'error': '401 Unauthorized'}, 401
    
class Logout(Resource):
    
    def delete(self):
        
        if session.get('user_id'):
            
            session['user_id'] = None
            
            return {}, 204
        
        return {'error': '401 Unauthorized'}, 401

api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Logout, '/logout', endpoint='logout')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
