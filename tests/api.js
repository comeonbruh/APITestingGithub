const{test, expect} = require('@playwright');
const{test, expect} = require('@playwright/test');
const REPO = 'APITestingGithub';
const USER = 'comeonbruh';

test('should create a bug report', async({request}) => {
    const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`,{
        data:{
            title: '[Bug] report 1',
            body: 'Bug description,'
        }
    })
    expect(newIssue.ok()).toBeTruthy();

    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
        title: '[Bug] report 1',
        body: 'bug description'
    }));
});

test('should create a feature request', async({request}) => {
    const newissue = await request.post(`/repos/${USER}/${REPO}/issues`,{
        data:{
            title: '[Feature] request 1',
            body: 'Feature description',
        }
    });
    expect(newIssue.ok()).toBeTruthy();
    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
        title: '[Feature] request 1',
        body:' Feature description'
    }))
});