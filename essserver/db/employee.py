from google.appengine.ext import ndb


class Employee(ndb.Model):
    firstName = ndb.StringProperty()
    middleName = ndb.StringProperty()
    lastName = ndb.StringProperty()
    email = ndb.StringProperty()
    address = ndb.StringProperty()
    phone = ndb.StringProperty()
    bsb = ndb.StringProperty()
    accountNo = ndb.StringProperty()


    @property
    def serialize(self):
       """Return object data in easily serializeable format"""
       e = self.to_dict()
       e['id'] = self.key.id()
       return e

    @staticmethod
    def save(details):

        if details['id'] == '<New>':
            eId = details['firstName'][0].upper() + details['lastName'][0].upper() + '001'
            e = Employee(key = ndb.Key(Employee, eId))
        else:
            e = Employee.get_by_id(details['id'])

        e.firstName = details['firstName']
        e.lastName = details['lastName']
        e.email = details['email']
        e.address = details['address']
        e.phone = details['phone']
        e.bsb = details['bsb']
        e.accountNo = details['accountNo']
        e.put()

        return e

    @staticmethod
    def get (details):
        if details['id'] == '<New>':
            eId = details['firstName'][0].upper() + details['lastName'][0].upper() + '001'
            eKey = ndb.Key(Employee, eId)
            return Employee(
                key = eKey,
                firstName = details['firstName'],
                lastName = details['lastName'],
                email = details['email'],
                address = details['address'],
                phone = details['phone'],
                bsb = details['bsb'],
                accountNo = details['accountNo'],
            )
        else:
            return Employee.get_by_id(details['id'])