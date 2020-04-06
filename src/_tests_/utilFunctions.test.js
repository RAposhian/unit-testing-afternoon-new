import { shortenText } from '../utils/functions';
import {wordCount, attachUserName} from '../../server/utils';
import {shortText, longText, posts, users} from './_data_/testData';

test('shortenText should not alter a string under 100 characters', () => {
   expect(shortenText(shortText)).toHaveLength(29);
 });
 
 test('shortenText should cut text after 100 and add three periods', () => {
   const shortened = shortenText(longText);
   expect(shortened).not.toHaveLength(longText.length);
   expect(shortened.slice(-3)).toBe('...');
 });
 
 test('wordCount should count the number of words', () => {
   expect(wordCount(posts)).toBe(233);
 });
 
 test('attachUserName should attach a users full name to a post', () => {
   const newPosts = attachUserName(users, posts);
   expect(newPosts[0]).toHaveProperty('displayName');
 });
 
 test('attachUserName should remove any post without matching user', () => {
   const newPosts = attachUserName(users, posts);
   const deletedPost = posts[5];
   expect(newPosts).not.toContainEqual(deletedPost);
 });