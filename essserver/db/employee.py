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
       return {
            'id': self.key.id(),
       		'firstName': self.firstName,
            'middleName': self.middleName,
            'lastName': self.lastName,
            'email': self.email,
            'address': self.address,
            'phone': self.phone,
            'bsb': self.bsb,
            'accountNo': self.accountNo,
       }


    def save(self, details):
        self.put()

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