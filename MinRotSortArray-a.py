class Solution:
    def findMin(self, nums: List[int]) -> int:
        if not nums:
            return None
        
        min_val = nums[0]

        for i in range(1, len(nums)):
            if nums[i] < min_val:
                min_val = nums[i]








        return min_val


