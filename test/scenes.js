import test from 'ava';
import { useSpectron, focusMain } from './helpers/spectron/index';
import { addSource, sourceIsExisting } from './helpers/spectron/sources';
import { addScene, clickRemoveScene, selectScene, openRenameWindow } from './helpers/spectron/scenes';
import { getClient } from './helpers/api-client';

useSpectron();

// Checks for the default audio sources
async function checkDefaultSources(t) {
  const app = t.context.app;
  await focusMain(t);
  t.true(await app.client.isExisting('div=Mic/Aux'));
  t.true(await app.client.isExisting('div=Desktop Audio'));
}

test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
test('Restarting the app preserves the default sources', async t => {
  const client = await getClient();
  const app = t.context.app;
  const sceneName = 'Coolest Scene Ever';
  const sceneCollectionsService = client.getResource('SceneCollectionsService');

  await addScene(t, sceneName);

  await focusMain(t);
  t.true(await app.client.isExisting(`div=${sceneName}`));

  // reload config
  await sceneCollectionsService.load(sceneCollectionsService.collections[0].id);

  await focusMain(t);
  await selectScene(t, sceneName);
  await checkDefaultSources(t);
});
