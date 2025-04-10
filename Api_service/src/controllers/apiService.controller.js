import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

const createApiService = asyncHandler(async (req, res) => {
  const {
    publisherId,
    name,
    description,
    category,
    tags,
    baseUrl,
    availableRoute,
    applicableFilter,
    termsOfUse,
    visibility,
    isLive,
    suscriptionPerMonth,
    suscriptionQuater,
    suscriptionPerHalfYear,
    suscriptionPerYear,
    isPaid,
    isSecured,
    rateLimit,
  } = req.body;

  if (
    [
      publisherId,
      name,
      description,  // Add this field to validation
      category,
      baseUrl,
      visibility,
      isLive,
      isPaid,
      isSecured,
      rateLimit,
    ].some((field) => {
      return field === undefined || field === null || 
             (typeof field === 'string' && field.trim() === "");
    })
  ) {
    throw new ApiError(400, "All fields are required");
  }

  let allUsers;
  async function main() {
    await prisma.ApiService.create({
      data: {
        publisherId,
        name,
        description,
        category,
        tags,
        docs : "",
        baseUrl,
        availableRoute,
        applicableFilter,
        termsOfUse: termsOfUse || "", // Provide a default empty string if null/undefined
        visibility,
        isLive,
        subscriptionPerMonth:0,
        subscriptionPerQuatre:0,
        subscriptionPerHalfYear:0,
        subscriptionPerYear:0,
        isPaid,
        isSecured,
        rateLimit,
      },
    });

    allUsers = await prisma.ApiService.findMany({});
  }

  main()
    .then(async () => {
      await prisma.$disconnect();
      res
        .status(201)
        .json(
          new ApiResponse(200, allUsers, "API Service registered successfully !!"),
        );
    })
    .catch(async (e) => {
      console.error("Prisma Error:", e); // Add this line to see the actual error
      await prisma.$disconnect();
      throw new ApiError(
        500,
        "Something went wrong while registering the API service",
      );
    });
});

export { createApiService };
