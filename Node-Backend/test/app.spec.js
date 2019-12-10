const chai = require('chai');
//const mocha = require('mocha');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);

describe('Server', () =>{

    
describe('/GET', () =>{
    it('should do a thing', () =>{
        chai.expect(true).to.eq(true);
    });
    it('should do another thing', (done) =>{
        chai.request(app)
        .get('/item/')
        .end((err,res) => {
            chai.expect(res.status).to.eq(200);
            chai.expect(res.text).to.eq("welcome weve been waiting");
            done();
        });
    });
});
describe('/POST', () =>{
    it('should do distin thing', () =>{
        
        chai.expect(true).to.eq(true);
    });
});
    
    
});