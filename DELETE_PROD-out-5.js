db.sessions.deleteOne({ _id: ObjectId("5dfb1fa1fe9097588c9a09e5") })
db.sessions.deleteOne({ _id: ObjectId("5dfc693331dad5631cb696ca") })
db.sessions.remove({ shortToken: '43c65584916ba9a25013afefae6e48f7' }, {})
db.sessions.deleteOne({ _id: ObjectId("5dfb297aea4835476ebc53ed") })
db.sessions.deleteOne({ _id: ObjectId("5dfcb42911451162dbc26587") })
db.sessions.deleteOne({ _id: ObjectId("5dfc8af60fe52162f8a204d7") })
db.sessions.deleteOne({ _id: ObjectId("5e00c7264553801c9d9cc127") })
db.sessions.deleteOne({ _id: ObjectId("5e00cc1b8a13aa1cc187d818") })
db.sessions.deleteOne({ _id: ObjectId("5e0069e1e2bbd86322e31e1f") })
db.sessions.deleteOne({ _id: ObjectId("5e00e1f08a13aa1cc187d86b") })
db.sessions.deleteOne({ _id: ObjectId("5de77ad2955f394b34ee5325") })
db.sessions.remove({ shortToken: '7659b1130891d1e86d51ca7037c47d6d' }, {})
db.sessions.remove({ shortToken: '8a22c5be7461b9e14e1adfdc2cd70b40' }, {})
db.sessions.deleteOne({ _id: ObjectId("5e01bb0da51a341cd527e7e0") })
db.sessions.remove({ shortToken: '6bbf1c5a8a10ec8141f38db037bc9dd4' }, {})
db.sessions.remove({ shortToken: '50784019c63b546abda813385a6b1821' }, {})
db.sessions.remove({ shortToken: '8c3b86f990ec317c77c111a35131cf11' }, {})
db.sessions.deleteOne({ _id: ObjectId("5e01d38c689de01ce02aa492") })
db.sessions.deleteOne({ _id: ObjectId("5e0234887d29c63cf165adf0") })
db.sessions.deleteMany({ mobileNumber: '+255710100057' }, {})
db.sessions.deleteMany({ mobileNumber: '+255710100057' }, {})
db.sessions.deleteOne({ _id: ObjectId("5e02e89fd6fafb57a7f4d8c2") })
db.sessions.deleteMany({ mobileNumber: '+255710100046' }, {})
db.sessions.deleteMany({ mobileNumber: '+255710100046', shortToken: { '$not': { '$in': [ '9b126a73076ce13160d36a59469faccc' ] } } }, {})
db.sessions.remove({ shortToken: '9b126a73076ce13160d36a59469faccc' }, {})
db.sessions.deleteOne({ _id: ObjectId("5e005edbac9b7e0963196e53") })
db.sessions.deleteOne({ _id: ObjectId("5e0359e53053145767dcb599") })
db.sessions.deleteOne({ _id: ObjectId("5dfe410d617fb262e109836d") })
db.subscription.findOneAndDelete({ Id: ObjectId("5de78fca46aa295674a045d6"), type: 'package', userId: ObjectId("5de75b2f955f394b34ee52ba"), startDate: new Date("Mon, 30 Sep 2019 00:00:00 GMT"), endDate: new Date("Sun, 29 Dec 2019 00:00:00 GMT") }, {})
db.sessions.deleteOne({ _id: ObjectId("5e00e4b4a51a341cd527e6d1") })
db.sessions.deleteOne({ _id: ObjectId("5e03a79c3053145767dcb689") })
db.sessions.deleteOne({ _id: ObjectId("5e0454c6e7d4f66e7c6d6b3b") })
db.sessions.deleteMany({ mobileNumber: '+255784166442' }, {})
db.sessions.deleteMany({ mobileNumber: '+255784166442' }, {})
db.sessions.deleteMany({ mobileNumber: '+255784166442' }, {})
db.sessions.deleteMany({ mobileNumber: '+255784166442' }, {})
db.sessions.deleteMany({ mobileNumber: '+255784166442' }, {})
db.sessions.remove({ shortToken: '9e3e8cb1339e61054be2a55d162f0025' }, {})
db.sessions.remove({ shortToken: '21b13b1ec19c659e22607cadac032df5' }, {})
db.sessions.deleteMany({ mobileNumber: '+255710100078' }, {})
db.sessions.remove({ shortToken: '66dad87bf83743b54383b7259fe75912' }, {})
db.sessions.deleteOne({ _id: ObjectId("5e0607713b72ff0c2e164582") })
db.sessions.remove({ shortToken: '7de26af28120057edc4a817af611a145' }, {})