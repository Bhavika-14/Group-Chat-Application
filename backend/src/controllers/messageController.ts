import { Request, Response } from 'express';
import MessageService from '../services/messages/message';

export const createMessage = async (req: Request, res: Response) => {
  const { text, groupId, userId } = req.body;
  try {
    const newMessage = await MessageService.createMessage({ text, groupId, userId });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create message' });
  }
};

export const updateMessage = async (req: Request, res: Response) => {
  const { id, text } = req.body;
  try {
    const updatedMessage = await MessageService.updateMessage(id, text);
    res.status(200).json(updatedMessage);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update message' });
  }
};

export const deleteMessage = async (req: Request, res: Response) => {
  const { id } = req.query;
  try {
    await MessageService.deleteMessage(id as string);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete message' });
  }
};

export const getMessageById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const message = await MessageService.getMessageById(id);
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get message' });
  }
};

export const getMessagesByGroupId = async (req: Request, res: Response) => {
  const { groupId } = req.params;
  try {
    const messages = await MessageService.getMessagesByGroupId(groupId);
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get messages' });
  }
};

export const getMessagesByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const messages = await MessageService.getMessagesByUserId(userId);
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get messages' });
  }
};