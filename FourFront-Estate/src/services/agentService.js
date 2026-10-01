import { supabase } from './supabaseClient';

/**
 * FourFront-Estate - Agent Service (Supabase Direct Integration)
 */

export const getAgents = async () => {
  const { data, error } = await supabase
    .from('agents')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching agents from Supabase:', error);
    throw error;
  }
  return data;
};

export const getAgentById = async (id) => {
  const { data, error } = await supabase
    .from('agents')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error fetching agent ${id}:`, error);
    throw error;
  }
  return data;
};

export const getAgentProperties = async (id) => {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('agent_id', id)
    .order('created_at', { ascending: false });

  if (error) {
    console.error(`Error fetching properties for agent ${id}:`, error);
    throw error;
  }
  return data;
};

export default {
  getAgents,
  getAgentById,
  getAgentProperties,
};