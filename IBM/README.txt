Below is a condensed summary of what people on that Reddit thread said about IBM’s “Welcome to IBM 2023-2024 - General Software Developer - Global - Standard” HackerRank assessment, and how I (or you) might prepare based on those insights.
What the Redditors Said

    Test Format
        Often 2 coding problems, typically 45–60 minutes total.
        Occasionally, some have reported a single question or slightly different variations (e.g., one was geometry-based about circle intersections).
        Some mention the difficulty can be comparable to LeetCode “Easy/Medium” or “Medium/Hard.”

    Common Themes in Questions
        Arrays, Summation, and Flags
            Example: You have two arrays of equal length, plus a flag indicating “odd” or “even.” You sum up corresponding elements (arrayA[i] - arrayB[i]) based on indices that are odd or even. Then decide who “wins” based on if the sum is positive or negative.
        Swapping Digits in an Integer
            Example: You can swap adjacent digits if they share the same parity (both odd or both even). The goal is to get the maximum possible integer after performing zero or more swaps.
        Stack usage / Basic data structures
            Some questions involve using a stack to keep track of certain values in an array.
        Geometry / Math-based
            One user got a geometry question about intersecting circles. This is less common, but it shows that the second question can be more unique or “tricky.”

    Difficulty and Time Pressure
        Many found it “easy to medium” if you’re comfortable with data structures and array manipulations.
        Others said the time felt tight (e.g., 60 minutes for 2 questions).
        Some testers failed to pass all test cases due to not optimizing in time.

    Follow-up Steps
        After completing the coding challenge, some received a behavioral/“trait-based” assessment.
        Some got ghosted, while others received forms requesting more details.
        Timelines for hearing back from IBM varied widely (a few days to a few weeks, or no response at all).

    General Advice / Observations
        Good grasp of fundamentals: arrays, two-pointer techniques, simple data structures (stacks, queues).
        Prepare for edge cases—especially around indexing or tricky corner cases in “swapping” logic.
        Code must run efficiently enough to pass time limits.
        IBM’s pay and culture reputation vary, but that’s a separate discussion.

How I Would Prepare

    Review the Basics of Data Structures and Algorithms
        Arrays and Strings: Be comfortable iterating, slicing, merging, comparing elements, using two-pointers, sliding window, etc.
        Stacks/Queues: Practice a few classic problems that use stacks, such as matching parentheses, nearest greater element, or balancing operators. That’s often enough to handle most “stack-based” array challenges.
        Basic Math/Geometry: Possibly review how to detect circle intersection or do some computational geometry if you want to be extra cautious (though it’s less common). But at minimum, be confident about basic geometry or coordinate calculations.

    Practice Similar Coding Problems
        Parity & Swapping: For example, given a number, swap adjacent digits if they share a parity, to maximize or minimize a number. This tests your logic for:
            Identifying digit parity (odd/even).
            Doing adjacent swaps in a loop.
            Ensuring you track the maximum possible arrangement.
        Summation with Conditions: Summations or differences of array elements under certain “odd/even index” conditions. This can be extended to more complex conditions (e.g., specific mod checks, skipping certain indices, etc.).
        Time-Complexity: For typical coding tests, O(n) or O(n * log n) solutions are usually acceptable. Make sure any approach with nested loops on large arrays is optimized if possible.

    Mock the Time Constraints
        Set a 30-minute or 45-minute timer and solve 2 “medium” coding challenges.
        Get used to quickly reading and parsing the problem statement, writing clean solutions, and verifying correctness with sample test cases.

    Be Strategic in the HackerRank Environment
        Read All Requirements Carefully: Some questions have small but important details—e.g., printing “Tie” instead of “tie” can fail a test.
        Test with Sample Cases: Always run the sample tests. If they don’t provide sample input-output, create small examples yourself.
        Edge Cases: For example, empty arrays, single-element arrays, or very large arrays. If you are dealing with integer input, consider extremes like negative numbers or large integer values if not restricted.
        Time Management: If you get stuck on one question for too long, move to the next to ensure you get partial credit. Often the first question is easier—try to secure that one quickly.

    Plan for Post-Test Steps
        Some people report a “trait-based” or “behavioral” test afterward. These typically measure your workplace preferences, personality, or approach to teamwork.
        Wait times for results vary. Keep an eye on your inbox, but also apply to other opportunities.

Final Thoughts

    Main Priority: Solidify array and string manipulations, plus comfort with basic data structures (stacks, queues).
    Practice: Solve a few typical “medium-level” HackerRank or LeetCode problems focusing on indexing, swapping, summations, etc.
    Time Management: Simulate the real test environment and avoid spending all your time on a single bug.
    Be Thorough: IBM’s coding test might not be extremely tricky, but mistakes under time pressure happen—double-check your code, watch out for off-by-one errors or misread instructions.