const { Gitlab } = require('@gitbeaker/node');

const HOST = '';
const TOKEN = '';
const PROJECT_ID = ''

async function test() {
  const _gitlabApi = new Gitlab({
    host: HOST,
    token: TOKEN
  });

  const response = await _gitlabApi.MergeRequests.all({
    page: 1,
    per_page: 100,
    projectId: PROJECT_ID,
    state: 'opened',
    showExpanded: true
  });

  console.log('response :', JSON.stringify(response, null, 2));
}

test();
