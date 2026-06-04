from flask import Flask
from flask_cors import CORS
from config import config
import os

def create_app(config_name=None):
    """Factory pattern para crear la aplicación Flask"""
    
    if config_name is None:
        config_name = os.getenv('FLASK_ENV', 'development')
    
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    
    # Habilitar CORS
    CORS(app)
    
    # Registrar blueprints (rutas)
    # from routes.auth import auth_bp
    # from routes.products import products_bp
    # from routes.cart import cart_bp
    # from routes.users import users_bp
    
    # app.register_blueprint(auth_bp)
    # app.register_blueprint(products_bp)
    # app.register_blueprint(cart_bp)
    # app.register_blueprint(users_bp)
    
    # Ruta de prueba
    @app.route('/')
    def index():
        return {
            'message': 'Bienvenido a Estante Virtual API',
            'version': '1.0.0',
            'status': 'active'
        }
    
    @app.route('/health')
    def health():
        return {'status': 'healthy'}, 200
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=5000, debug=True)
