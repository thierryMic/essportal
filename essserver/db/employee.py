from google.appengine.ext import ndb


class Employee(ndb.Model):
    firstName = ndb.StringProperty()
    middleName = ndb.StringProperty()
    lastName = ndb.StringProperty()
    dob = ndb.StringProperty()
    email = ndb.StringProperty()
    address = ndb.StringProperty()
    phone = ndb.StringProperty()
    kinName = ndb.StringProperty()
    kinRelation = ndb.StringProperty()
    kinPhone = ndb.StringProperty()
    superFund=ndb.StringProperty()
    superAbn = ndb.StringProperty()
    superNo = ndb.StringProperty()
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
        e.middleName = details['middleName']
        e.lastName = details['lastName']
        e.dob = details['dob']
        e.email = details['email']
        e.address = details['address']
        e.phone = details['phone']
        e.kinName = details['kinName']
        e.kinRelation = details['kinRelation']
        e.kinPhone = details['kinPhone']
        e.superFund=details['superFund']
        e.superAbn = details['superAbn']
        e.superNo = details['superNo']
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