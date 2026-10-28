/**
 * @jest-environment jsdom
 */

import { jest } from "@jest/globals";

import {
    onRefreshQuiz,
    onSubmit,
    closePopup
} from "../controllers/knowledgeTest.js";

describe("Knowledge Test Quiz", () => {

    beforeEach(() => {
        document.body.innerHTML = `
            <input type="checkbox" id="question1Choice1">
            <input type="checkbox" id="question1Choice2">
            <input type="checkbox" id="question1Choice3">
            <input type="checkbox" id="question1Choice4">

            <input type="checkbox" id="question2Choice1">
            <input type="checkbox" id="question2Choice2">
            <input type="checkbox" id="question2Choice3">
            <input type="checkbox" id="question2Choice4">

            <input id="question3Input">
            <input id="question4Input">
            <input id="question5Input">

            <input id="question6Input1">
            <input id="question6Input2">

            <input type="checkbox" id="question7Choice1">
            <input type="checkbox" id="question7Choice2">
            <input type="checkbox" id="question7Choice3">
            <input type="checkbox" id="question7Choice4">

            <input type="checkbox" id="question8Choice1">
            <input type="checkbox" id="question8Choice2">
            <input type="checkbox" id="question8Choice3">
            <input type="checkbox" id="question8Choice4">

            <input id="question9Input">

            <input type="checkbox" id="question10Choice1">
            <input type="checkbox" id="question10Choice2">
            <input type="checkbox" id="question10Choice3">
            <input type="checkbox" id="question10Choice4">

            <div id="score"></div>
            <div id="scorePopup"></div>
        `;
    });

    describe("onRefreshQuiz", () => {

        test("should uncheck selected answers", () => {
            document.getElementById("question1Choice1").checked = true;
            document.getElementById("question2Choice4").checked = true;
            document.getElementById("question7Choice2").checked = true;

            onRefreshQuiz();

            expect(document.getElementById("question1Choice1").checked).toBe(false);
            expect(document.getElementById("question2Choice4").checked).toBe(false);
            expect(document.getElementById("question7Choice2").checked).toBe(false);
        });

        test("should clear text input answers", () => {
            document.getElementById("question3Input").value = "Object";
            document.getElementById("question4Input").value = "<Input/>";
            document.getElementById("question5Input").value = "SDK";
            document.getElementById("question6Input1").value = "user input";
            document.getElementById("question6Input2").value = "interactions";
            document.getElementById("question9Input").value = "descriptor";

            onRefreshQuiz();

            expect(document.getElementById("question3Input").value).toBe("");
            expect(document.getElementById("question4Input").value).toBe("");
            expect(document.getElementById("question5Input").value).toBe("");
            expect(document.getElementById("question6Input1").value).toBe("");
            expect(document.getElementById("question6Input2").value).toBe("");
            expect(document.getElementById("question9Input").value).toBe("");
        });
    });

    describe("onSubmit", () => {

        test("should display 10/10 when all answers are correct", () => {
            document.getElementById("question1Choice1").checked = true;
            document.getElementById("question2Choice4").checked = true;
            document.getElementById("question3Input").value = "Object";
            document.getElementById("question4Input").value = "<Input/>";
            document.getElementById("question5Input").value = "SDK";
            document.getElementById("question6Input1").value = "user input";
            document.getElementById("question6Input2").value = "interactions";
            document.getElementById("question7Choice2").checked = true;
            document.getElementById("question8Choice1").checked = true;
            document.getElementById("question9Input").value = "descriptor";
            document.getElementById("question10Choice2").checked = true;

            const mockEvent = { preventDefault: jest.fn() };

            onSubmit(mockEvent);

            expect(document.getElementById("score").innerHTML).toBe("10/10");
        });

        test("should display 0/10 when all answers are incorrect", () => {
            const mockEvent = { preventDefault: jest.fn() };

            onSubmit(mockEvent);

            expect(document.getElementById("score").innerHTML).toBe("0/10");
        });

        test("should calculate a partial score correctly", () => {
            document.getElementById("question1Choice1").checked = true;
            document.getElementById("question2Choice4").checked = true;
            document.getElementById("question3Input").value = "Object";

            const mockEvent = { preventDefault: jest.fn() };

            onSubmit(mockEvent);

            expect(document.getElementById("score").innerHTML).toBe("3/10");
        });

        test("should prevent the default form submission", () => {
            const mockEvent = { preventDefault: jest.fn() };

            onSubmit(mockEvent);

            expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
        });

        test("should open the score popup after submitting", () => {
            const mockEvent = { preventDefault: jest.fn() };

            onSubmit(mockEvent);

            expect(
                document.getElementById("scorePopup").classList.contains("openScorePopup")
            ).toBe(true);
        });

        test("should not award a point when correct and incorrect options are both selected", () => {
            document.getElementById("question1Choice1").checked = true;
            document.getElementById("question1Choice2").checked = true;

            const mockEvent = { preventDefault: jest.fn() };

            onSubmit(mockEvent);

            expect(document.getElementById("score").innerHTML).toBe("0/10");
        });
    });

    describe("closePopup", () => {

        test("should close the score popup", () => {
            const popup = document.getElementById("scorePopup");
            popup.classList.add("openScorePopup");

            closePopup();

            expect(popup.classList.contains("openScorePopup")).toBe(false);
        });
    });
});
