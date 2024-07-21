import configparser

def getConfig(section, key):
    config = configparser.SafeConfigParser()
    config.read('config.ini')
    return config.get(section, key)