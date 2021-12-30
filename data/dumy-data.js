import Test from "../models/test"
import TestDescription from "../models/testDescription"
const Tests = [
    new Test(1, "Test1", "#f528d5"),
    new Test(2, "Test2", "#f54242"),
    new Test(3, "Test3", "#f5a442"),
    new Test(4, "Test4", "#f5d142"),
    new Test(5, "Test5", "#368dff"),
    new Test(6, "Test6", "#41d95d"),
    new Test(7, "Test7", "#9eecff"),
    new Test(8, "Test8", "#ccc")
]
const Descriptions = [
    new TestDescription(1, "Test1", "Test 1 description"),
    new TestDescription(2, "Test2", "Test 2 description"),
    new TestDescription(3, "Test3", "Test 3 description"),
    new TestDescription(4, "Test4", "Test 4 description"),
    new TestDescription(5, "Test5", "Test 5 description"),
    new TestDescription(6, "Test6", "Test 6 description"),
    new TestDescription(7, "Test7", "Test 7 description"),
    new TestDescription(8, "Test8", "Test 8 description")
]
export default Tests;
export {Descriptions};