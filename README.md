# My_Netflix

Pour rappel, il est nécessaire d'avoir python et git installé.

Pour installer les dépendances:

1. Ouvrir la console de Git
2. Se rendre à l'emplacement où l'on veut cloner le projet
3. Exécuter "git clone https://github.com/jaikko/My_Netflix.git"
4. Dans cette console, se rendre dans le dossier racine du projet avec la commande "cd My_Netflix" 
5. Exécuter la commande "virtualenv -p python3 venv". venv est le nom de dossier.
6. Dans la racine du dossier du projet, éxecuter la commande "source venv/Scripts/activate"
7. Lancez la commande "python -m pip install -r requirements.txt"
8. Pour terminer, exécuter "python manage.py runserver"

Vous devez activer l'environnement virtuel ( voir .6 au-dessus) pour l'étape ci-dessous.

Pour lancer le serveur:

1. Ouvrir la console de Git
2. Se rendre dans le dossier racine du projet puis éxecuter la commande " python manage.py runserver"
